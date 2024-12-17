import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UptimeLogFactory } from './schemas/uptime-logs.schema';
import { UptimeLogsController } from './uptime-logs.controller';
import { UptimeLogsService } from './uptime-logs.service';

@Module({
  imports: [MongooseModule.forFeature([UptimeLogFactory])],
  providers: [UptimeLogsService],
  controllers: [UptimeLogsController],
  exports: [UptimeLogsService],
})
export class UptimeLogsModule {}
