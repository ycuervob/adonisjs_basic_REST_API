import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async getListarUsuarios() : Promise<Usuario[]>{
        const user = await Usuario.all();
        return user;
    }

    public async getListarUsuariosYPerfil() : Promise<Usuario[]>{
        const user = await Usuario.query().preload('perfil');
        return user;
    }

    public async getListarUsuariosyPublicaciones() : Promise<Usuario[]>{
        const user = await Usuario.query().preload('publicaciones');
        return user;
    }

    public async getListarUsuariosGrupos() : Promise<Usuario[]>{
        const user = await Usuario.query().preload('usuario_grupos');
        return user;
    }

    public async setRegistrarUsuario({request,response}: HttpContextContract){
        const dataUsuario = request.only(['nombre_usuario','codigo_usuario','telefono_usuario','email_usuario','contrasena']);
        try{
            const codigoUsuario = dataUsuario.codigo_usuario;
            const usuarioExistente : Number = await this.getValidarUsuarioExistente(codigoUsuario);
            if(usuarioExistente === 0){
                await Usuario.create(dataUsuario);
                response.status(200).json({message:'Usuario registrado correctamente'});
            }else{
                response.status(400).json({message:'Error, el codigo usuario ya se encuentra registrado'});
            }
        }catch(error){
            console.log(error);
            response.status(500).json({message:'Error al registrar el usuario'});
        }
    }

    public async getValidarUsuarioExistente(codigoUsuario : Number) : Promise<Number>{
        const total = await Usuario.query().where({'codigo_usuario':codigoUsuario}).count('*').from('usuarios');
        return parseInt(total[0]['count(*)']);
    }
}
