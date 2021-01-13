import { Test, TestingModule } from '@nestjs/testing';
import { AdminRoomController } from './admin-room.controller';

describe('AdminRoomController', () => {
  let controller: AdminRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminRoomController],
    }).compile();

    controller = module.get<AdminRoomController>(AdminRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
