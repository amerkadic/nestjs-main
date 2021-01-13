import { Test, TestingModule } from '@nestjs/testing';
import { AdminRoomService } from './admin-room.service';

describe('AdminRoomService', () => {
  let service: AdminRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminRoomService],
    }).compile();

    service = module.get<AdminRoomService>(AdminRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
