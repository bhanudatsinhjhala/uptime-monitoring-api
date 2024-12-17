import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateUptimeLogDto } from './dtos/create-uptime.log';
import { UptimeLogsService } from './uptime-logs.service';

@Controller('uptime-logs')
export class UptimeLogsController {
  constructor(@Inject() private readonly uptimeLogsService: UptimeLogsService) {}

  @Post()
  async createUptimeLog(@Body() createUptimeLogDto: CreateUptimeLogDto) {
    return this.uptimeLogsService.checkUptime(createUptimeLogDto.url, new Types.ObjectId(createUptimeLogDto.siteId));
  }
}
