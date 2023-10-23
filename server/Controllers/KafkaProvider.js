import kafka from '../KafkaJS/Utility/Kafka'

const producer = kafka.producer()

await producer.connect()
await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KafkaJS user!'},
    ],
})

await producer.disconnect()



export default producer;