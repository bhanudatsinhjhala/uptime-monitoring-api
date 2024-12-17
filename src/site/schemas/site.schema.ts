import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema({ collection: 'sites', timestamps: true })
export class Site {
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.String, required: true })
  siteUrl: string;

  @Prop({ type: SchemaTypes.String })
  name: string;

  @Prop({ type: SchemaTypes.Number, required: true, default: 120 }) // value is stored in seconds
  frequency: number;
}

export const SiteSchema = SchemaFactory.createForClass(Site);
export type SiteDocument = HydratedDocument<Site>;

export const SiteFactory = {
  name: Site.name,
  schema: SiteSchema,
};
