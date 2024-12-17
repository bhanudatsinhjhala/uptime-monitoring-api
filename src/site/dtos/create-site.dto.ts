import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  siteUrl: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @Min(1)
  frequency: string;
}
