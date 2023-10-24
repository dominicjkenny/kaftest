import kafka from './Kafka.js'
import { Chance } from 'chance';

const chance = new Chance();

const producer = kafka.producer()

await producer.connect()
console.log('producer connected')

// function randomVal() {
//   return Chance.animal();
// }

async function action() {
  await producer.send({
      topic: 'test-topic',
      messages: [
          { value: chance.animal()},
      ],
  })

}
const dataStream = setInterval(async () => {await action()}, 1000)

setTimeout(async () => {
    clearInterval(dataStream)
    await producer.disconnect()
    console.log('producer disconnected')
}, 10100)



export default producer;
