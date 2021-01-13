import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller('admin-room')
export class AdminRoomController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'mainKafka',
        brokers: ['localhost:9093'],
      },
      consumer: {
        groupId: 'admin-room-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('admin-room-topic');
    await this.client.connect();
  }

  @Get()
  getHello() {
    return this.client.send('admin-room-topic', 'Hello Admin Kafka!');
  }
}
