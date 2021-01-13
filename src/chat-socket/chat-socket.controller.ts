import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller('chat-socket')
export class ChatSocketController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'mainKafka',
        brokers: ['localhost:9094'],
      },
      consumer: {
        groupId: 'chat-socket-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('chat-socket-topic');
    await this.client.connect();
  }

  @Get()
  getHello() {
    return this.client.send('chat-socket-topic', 'Hello Chat Kafka!');
  }
}
