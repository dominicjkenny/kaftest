import kafka from './Kafka.js';
import { Chance } from 'chance';

const producer = kafka.producer();

await producer.connect();
console.log('producer connected');
await producer.send({
  topic: 'animals',
  messages: [{ value: 'Hello World!' }],
});
console.log('producer methods: ', producer);
await producer.disconnect();
console.log('producer disconnected');

export default producer;
