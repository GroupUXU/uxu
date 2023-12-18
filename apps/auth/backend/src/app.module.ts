import { Module } from '@nestjs/common';
import { AuthController, AuthProvider } from './api';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthProvider],
})
export class AppModule {}
