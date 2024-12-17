import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model, Types } from 'mongoose';
import { UptimeLog, UptimeLogDocument } from './schemas/uptime-logs.schema';

@Injectable()
export class UptimeLogsService {
  constructor(@InjectModel(UptimeLog.name) private readonly uptimeModel: Model<UptimeLogDocument>) {}

  public async checkUptime(url: string, siteId: Types.ObjectId) {
    const startTime = Date.now();

    const data: UptimeLog = {
      metadata: {
        siteId,
      },
      status: true,
      rt: startTime,
    };

    try {
      await axios.head(url);
      data.rt = Date.now() - startTime;
      await this.uptimeModel.create(data);
    } catch (error) {
      data.rt = Date.now() - startTime;
      data.status = false;
      data.errorMsg = error.message;
      await this.uptimeModel.create(data);
    }
  }
}
