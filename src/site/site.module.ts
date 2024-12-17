import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleUptimeModule } from '../schedule-uptime/schedule-uptime.module';
import { SiteFactory } from './schemas/site.schema';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  imports: [MongooseModule.forFeature([SiteFactory]), ScheduleUptimeModule],
  providers: [SiteService],
  controllers: [SiteController],
  exports: [SiteService],
})
export class SiteModule {}
