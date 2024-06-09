import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  healthChcek() {
    return process.env.HOSTNAME;
  }
}
