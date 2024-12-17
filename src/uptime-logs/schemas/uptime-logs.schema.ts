import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Site } from '../../site/schemas/site.schema';

@Schema()
export class UptimeMetadataSchema {
  @Prop({ type: SchemaTypes.ObjectId, required: true, refPath: Site.name })
  siteId: Types.ObjectId;
}

@Schema({
  collection: 'uptimeLogs',
  timeseries: {
    timeField: 'time',
    metaField: 'metadata',
    granularity: 'seconds',
  },
})
export class UptimeLog {
  @Prop({ type: UptimeMetadataSchema })
  metadata: object;
  @Prop({ type: SchemaTypes.Number, required: true })
  rt: number;

  @Prop({ type: SchemaTypes.Boolean, required: true })
  status: boolean;

  @Prop({ type: SchemaTypes.Date, required: true, default: Date.now() })
  time?: Date;

  @Prop({ type: SchemaTypes.String })
  errorMsg?: string;
}

export const UptimeLogSchema = SchemaFactory.createForClass(UptimeLog);
export type UptimeLogDocument = HydratedDocument<UptimeLog>;

export const UptimeLogFactory = {
  name: UptimeLog.name,
  schema: UptimeLogSchema,
};
