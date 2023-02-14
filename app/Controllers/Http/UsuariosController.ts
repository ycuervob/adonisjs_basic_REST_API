import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async getListarUsuarios(): Promise<Usuario[]> {
        const user = await Usuario.all();
        return user;
    }

    public async getListarUsuariosYPerfil(): Promise<Usuario[]> {
        const user = await Usuario.query().preload('perfil');
        return user;
    }

    public async getListarUsuariosyPublicaciones(): Promise<Usuario[]> {
        const user = await Usuario.query().preload('publicaciones');
        return user;
    }

    public async getListarUsuariosGrupos(): Promise<Usuario[]> {
        const user = await Usuario.query().preload('usuario_grupos');
        return user;
    }

    public async setRegistrarUsuario({ request, response }: HttpContextContract) {
        const dataUsuario = request.only(['nombre_usuario', 'codigo_usuario', 'telefono_usuario', 'email_usuario', 'contrasena']);
        try {
            const codigoUsuario = dataUsuario.codigo_usuario;
            const usuarioExistente: Number = await this.getValidarUsuarioExistente(codigoUsuario);
            if (usuarioExistente === 0) {
                await Usuario.create(dataUsuario);
                response.status(200).json({ message: 'Usuario registrado correctamente' });
            } else {
                response.status(400).json({ message: 'Error, el codigo usuario ya se encuentra registrado' });
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ message: 'Error al registrar el usuario' });
        }
    }

    public async getValidarUsuarioExistente(codigoUsuario: Number): Promise<Number> {
        const total = await Usuario.query().where({ 'codigo_usuario': codigoUsuario }).count('*').from('usuarios');
        return parseInt(total[0]['count']);
    }

    public async buscarPorId({ request }: HttpContextContract) {
        const id = request.param('id');
        const usuario = await Usuario.find(id);
        return usuario;
    }

    public async actualizarUsuario({ request, response }: HttpContextContract) {
        const id = request.param('id');
        const usuario = await Usuario.find(id);
        if (usuario) {
            usuario.nombre_usuario = request.input('nombre_usuario');
            usuario.telefono_usuario = request.input('telefono_usuario');
            usuario.email_usuario = request.input('email_usuario');
            usuario.contrasena = request.input('contrasena');
            await usuario.save();
            response.status(200).json({ message: 'Usuario actualizado correctamente' });
        } else {
            response.status(400).json({ message: 'Error, el usuario no se encuentra registrado' });
        }
    }

    public async eliminarUsuario({ request, response }: HttpContextContract) {
        const id = request.param('id');
        const usuario = await Usuario.find(id);
        if (usuario) {
            await usuario.delete();
            response.status(200).json({ message: 'Usuario eliminado correctamente' });
        } else {
            response.status(400).json({ message: 'Error, el usuario no se encuentra registrado' });
        }
    }
    
    public async filtroPorNombre({ request }: HttpContextContract) {
        const nombre = request.input('nombre');
        const usuarios = await Usuario.query().where('nombre_usuario', 'like', '%'+nombre+'%');
        return usuarios;
    }
}
