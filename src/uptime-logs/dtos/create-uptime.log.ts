import { IsString } from 'class-validator';

export class CreateUptimeLogDto {
  @IsString()
  siteId: string;

  @IsString()
  url: string;
}
