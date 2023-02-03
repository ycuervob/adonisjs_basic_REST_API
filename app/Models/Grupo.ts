import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Grupo extends BaseModel {
  @column({ isPrimary: true })
  public codigo_grupo: number

  @column()
  public nombre_grupo: string

}
