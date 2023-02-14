import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Publicacione from 'App/Models/Publicacione';

export default class PublicacionesController {
    async setRegistrarPublicacion({ request, response }: HttpContextContract){
        try{
            const dataPublicacion = request.only(['codigo_publicacion', 'titulo_publicacion', 'cuerpo_publicacion', 'codigo_usuario']);
            const codigoPublicacion = dataPublicacion.codigo_publicacion;
            const publicacionExistente: Number =await this.getValidarPublicacionExistente(codigoPublicacion);
            if(publicacionExistente === 0){
                await Publicacione.create(dataPublicacion);
                response.status(200).json({ message: 'Publicacion registrada' });
            }else{
                response.status(400).json({ message: 'El codigo de la publicacion ya se encuentra registrado' });
            }
        }catch (error){
            console.log(error);
            response.status(500).json({ msg: 'Error en el servidor!!' });
        }
    }

    private async getValidarPublicacionExistente(codigoPublicacion: Number) : Promise<Number> {    
        let total = await Publicacione.query().where({'codigo_publicacion': codigoPublicacion}).count('*').from('publicaciones');
        return parseInt(total[0]['count']);
    }
}
