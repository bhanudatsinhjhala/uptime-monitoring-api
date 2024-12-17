import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { successMessages } from '../common/config/message.config';
import { ResponseHandler } from '../common/utils/response-handler';
import { ScheduleUptimeService } from '../schedule-uptime/schedule-uptime.service';
import { CreateSiteDto } from './dtos/create-site.dto';
import { Site, SiteDocument } from './schemas/site.schema';

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site.name) private readonly siteModel: Model<SiteDocument>,
    private readonly scheduleUptimeService: ScheduleUptimeService
  ) {}

  async createSite(createSiteDto: CreateSiteDto) {
    const site = await this.siteModel.create(createSiteDto);

    await this.scheduleUptimeService.createTaskScheduleForSite(site);
    return ResponseHandler.success(`Site ${successMessages.DATA_CREATED}`, HttpStatus.CREATED);
  }

  async getSiteById(siteId: Types.ObjectId): Promise<Site | null> {
    return this.siteModel.findById(siteId).lean();
  }
}
