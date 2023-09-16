import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import 'dotenv/config'

export async function getAllPromptsRoute(app: FastifyInstance) {
  app.get('/prompts', async () => {
    const prompts = await prisma.prompt.findMany()
    console.log(process.env.OPENAI_KEY)
    return prompts
  })
}