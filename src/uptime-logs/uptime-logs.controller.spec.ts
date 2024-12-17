import { Test, TestingModule } from '@nestjs/testing';
import { UptimeLogsController } from './uptime-logs.controller';

describe('UptimeLogsController', () => {
  let controller: UptimeLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UptimeLogsController],
    }).compile();

    controller = module.get<UptimeLogsController>(UptimeLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
