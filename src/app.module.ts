import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
import { MemberModule } from './member/member.module';
import { AdminRoomController } from './admin-room/admin-room.controller';
import { AdminRoomModule } from './admin-room/admin-room.module';
import { AdminRoomService } from './admin-room/admin-room.service';
import { ChatSocketController } from './chat-socket/chat-socket.controller';
import { ChatSocketModule } from './chat-socket/chat-socket.module';
import { ChatSocketService } from './chat-socket/chat-socket.service';

@Module({
  imports: [MemberModule, AdminRoomModule, ChatSocketModule],
  controllers: [
    AppController,
    MemberController,
    AdminRoomController,
    ChatSocketController,
  ],
  providers: [AppService, MemberService, AdminRoomService, ChatSocketService],
})
export class AppModule {}
