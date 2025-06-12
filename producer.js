const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'lokalhoszt-producer',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
  await producer.connect()
  await producer.send({
    topic: 'lokalhoszt-topic',
    messages: [{ value: 'Ez az első Kafka üzenetem!' }]
  })
  console.log('✅ Üzenet elküldve!')
  await producer.disconnect()
}

run().catch(console.error)
