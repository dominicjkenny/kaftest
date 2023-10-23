import { Kafka } from 'kafkajs';
import kafka from './Kafka.js';

const consumer = kafka.consumer({ groupId: 'test-group' });

await consumer.connect();
await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    });
  },
});

export default consumer;
