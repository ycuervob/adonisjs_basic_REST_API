import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Publicacione extends BaseModel {
  @column({ isPrimary: true })
  public codigo_publicacion: number

  @column()
  public titulo_publicacion: string

  @column()
  public cuerpo_publicacion: string

  @column()
  public codigo_usuario: number

}
