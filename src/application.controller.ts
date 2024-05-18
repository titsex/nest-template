import { ApplicationService } from './application.service'
import { Controller, Get } from '@nestjs/common'

@Controller()
export class ApplicationController {
	constructor(private readonly applicationService: ApplicationService) {}

	@Get()
	sayHelloWorld(): string {
		return this.applicationService.sayHelloWorld()
	}
}
