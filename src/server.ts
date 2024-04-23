import fasfify from 'fastify'
import { knex } from './database'

const app = fasfify()
app.get('/hello', async () => {
  const transactions = await knex('transactions')
  .select('*')
  .where('amount', 1000)
  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server runing')
  })
