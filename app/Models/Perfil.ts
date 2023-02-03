import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Perfil extends BaseModel {
  @column({ isPrimary: true })
  public codigo_perfil: number

  @column()
  public codigo_usuario: number

  @column()
  public nombre_perfil: string

  @column()
  public fecha_creacion: DateTime
}
