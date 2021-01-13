import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller('member')
export class MemberController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'mainKafka',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'member-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('member-topic');
    await this.client.connect();
  }

  @Get()
  getHello() {
    return this.client.send('member-topic', 'Hello Member Kafka!');
  }
}
