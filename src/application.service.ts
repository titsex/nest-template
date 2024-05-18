import { Injectable } from '@nestjs/common'

@Injectable()
export class ApplicationService {
	sayHelloWorld(): string {
		return 'Hello World!'
	}
}
