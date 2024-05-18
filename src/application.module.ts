import { ApplicationController } from './application.controller'
import { ApplicationService } from './application.service'
import { Module } from '@nestjs/common'

@Module({
	controllers: [ApplicationController],
	providers: [ApplicationService],
})
export class ApplicationModule {}
