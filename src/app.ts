import Fastify, { type FastifyInstance, type RouteShorthandOptions } from 'fastify'

const app: FastifyInstance = Fastify({ logger: true })

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
    },
  },
}

app.get('/health', opts, async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

app.get('/ready', opts, async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

app.get('/live', opts, async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

export { app }
