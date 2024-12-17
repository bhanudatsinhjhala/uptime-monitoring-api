import { Test, TestingModule } from '@nestjs/testing';
import { UptimeLogsService } from './uptime-logs.service';

describe('UptimeLogsService', () => {
  let service: UptimeLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UptimeLogsService],
    }).compile();

    service = module.get<UptimeLogsService>(UptimeLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
