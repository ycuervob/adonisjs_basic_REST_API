import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Grupo from "App/Models/Grupo";

export default class GruposController {
    public async setRegistrarGrupo({ request, response }: HttpContextContract) {
        try{
            const dataGrupo = request.only(['codigo_grupo', 'nombre_grupo']);
            const codigo_grupo = dataGrupo.codigo_grupo;
            const codigoGrupoExiste = await this.getValidarGrupoExiste(codigo_grupo);
            if(codigoGrupoExiste === 0){
                await Grupo.create(dataGrupo);
                response.status(200).json({message: 'Grupo registrado correctamente'});
            }else{
                return response.status(400).json({message: 'Ya existe un grupo con ese codigo'});
            }
        }catch (error){
            console.log(error);
            response.status(500).json({message: 'Error al registrar el grupo'});
        }
    }

    private async getValidarGrupoExiste(codigo_grupo: number) {
        const total = await Grupo.query().where('codigo_grupo', codigo_grupo).count('*').from('grupos');
        return parseInt(total[0]['count(*)']);
    }

}
