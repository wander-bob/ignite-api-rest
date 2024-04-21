import { knex as setupKnex, Knex } from 'knex'

export const config:Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './database/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database'
  }
}
export const knex = setupKnex(config)
