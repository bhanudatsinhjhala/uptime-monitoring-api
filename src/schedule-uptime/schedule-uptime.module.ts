import { Global, Module } from '@nestjs/common';
import { UptimeLogsModule } from '../uptime-logs/uptime-logs.module';
import { ScheduleUptimeService } from './schedule-uptime.service';

@Global()
@Module({
  imports: [UptimeLogsModule],
  providers: [ScheduleUptimeService],
  exports: [ScheduleUptimeService],
})
export class ScheduleUptimeModule {}
