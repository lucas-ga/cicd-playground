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
        },
      },
    },
  },
}

app.get('/health', opts, async () => {
  return { status: 'ok' }
})

export { app }
