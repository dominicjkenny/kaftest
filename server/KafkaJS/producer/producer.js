import kafka from '../Utility/Kafka.js'

const producer = kafka.producer()

await producer.connect()
console.log('producer connected')
await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello World!'},
    ],
})
console.log('producer methods: ', producer)
await producer.disconnect()
console.log('producer disconnected')


export default producer;