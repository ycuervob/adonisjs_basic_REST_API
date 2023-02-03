import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Grupo from 'App/Models/Grupo';
import Usuario from 'App/Models/Usuario';
import UsuarioGrupo from 'App/Models/UsuarioGrupo';

export default class GrupoUsuariosController {
    public async setRegistrarGrupoUsuario({ request, response }: HttpContextContract) {
        try{
            const dataGrupoUsuario = request.only(['codigo_usuario', 'codigo_grupo','fecha_inicio']);
            const codigoUsuario = dataGrupoUsuario.codigo_usuario;
            const codigoGrupo = dataGrupoUsuario.codigo_grupo;
            const datosExitentes: Number =await this.getValidarDatosGrupoYUsuario(codigoGrupo, codigoUsuario);
            switch (datosExitentes) {
                case 0:
                    await UsuarioGrupo.create(dataGrupoUsuario);
                    response.status(200).json({ message: 'Usuario registrado en el grupo' });
                    break;
                case 1:
                    response.status(400).json({ message: 'El codigo del usuario no se encuentra registrado' });
                    break;
                case 2:
                    response.status(400).json({ message: 'El codigo del grupo no se encuentra registrado' });
                    break;
            }
        }catch (error){
            console.log(error);
            response.status(500).json({ msg: 'Error en el servidor' });
        }
    }

    private async getValidarDatosGrupoYUsuario(codigoGrupo: Number, codigoUsuario: Number) : Promise<Number> {	
        let total = await Grupo.query().where({'codigo_grupo': codigoGrupo}).count('*').from('grupos');
        let cantidadDatos = total[0]['count(*)'];
        if(cantidadDatos !== 0){
            total = await Usuario.query().where({'codigo_usuario': codigoUsuario}).count('*').from('usuarios');
            cantidadDatos = parseInt(total[0]['count(*)']);
            if(cantidadDatos !== 0){
                return 0;
            }else{
                return 2;
            }
        }else{
            return 1;
        }
    }
}
