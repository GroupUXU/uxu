import { Controller, Get } from '@nestjs/common';
import { AuthProvider } from '../providers';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthProvider) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
