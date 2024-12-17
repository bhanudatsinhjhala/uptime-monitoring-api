import { Injectable, NotFoundException } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { errorMessages } from '../common/config/message.config';
import { Site } from '../site/schemas/site.schema';
import { UptimeLogsService } from '../uptime-logs/uptime-logs.service';

@Injectable()
export class ScheduleUptimeService {
  constructor(
    private readonly uptimeLogsService: UptimeLogsService,
    private scheduleRegistry: SchedulerRegistry
  ) {}

  public async createTaskScheduleForSite(site: Site) {
    if (!site) throw new NotFoundException(`Site ${errorMessages.DATA_NOT_FOUND}`);

    const newCron = new CronJob(`${site.frequency}*****`, async () => {
      await this.uptimeLogsService.checkUptime(site.siteUrl, site._id);
    });

    this.scheduleRegistry.addCronJob(site._id.toString(), newCron);
  }
}
