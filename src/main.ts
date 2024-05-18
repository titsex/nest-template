import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify'
import { ApplicationModule } from './application.module'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

const fastifyAdapter = new FastifyAdapter()

const application = await NestFactory.create<NestFastifyApplication>(ApplicationModule, fastifyAdapter)

const PORT = Number.parseInt(process.env.PORT!) || 7000

await application.listen(PORT, () => {
	Logger.debug(`Application listening on port ${PORT}`)
})
