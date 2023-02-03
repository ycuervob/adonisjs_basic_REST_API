import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_usuario').primary().unsigned()
      table.string('nombre_usuario', 100).notNullable()
      table.string('contrasena', 100).notNullable()
      table.string('email_usuario', 100).notNullable()
      table.string('telefono_usuario', 15).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
