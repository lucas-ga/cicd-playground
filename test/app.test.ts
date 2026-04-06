import { expect, describe, it } from 'vitest'
import { app } from '../src/app'

describe('GET /health', () => {
  it('should return 200', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health',
    })
    expect(response.statusCode).toBe(200)
  })
  it('should return status ok', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health',
    })
    const json = response.json()
    expect(json.status).toBe('ok')
  })
})
