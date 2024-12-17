import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateSiteDto } from './dtos/create-site.dto';
import { SiteService } from './site.service';

@Controller('site')
export class SiteController {
  constructor(@Inject() private readonly siteService: SiteService) {}

  @Post()
  async createSite(@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.createSite(createSiteDto);
  }
}
