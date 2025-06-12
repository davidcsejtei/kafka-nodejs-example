const { Kafka, logLevel } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'lokalhoszt-consumer',
  brokers: ['localhost:9092'],
  logLevel: logLevel.NOTHING,
  connectionTimeout: 3000,
  requestTimeout: 30000,
  retry: {
    initialRetryTime: 100,
    retries: 8
  }
})

const consumer = kafka.consumer({
  groupId: 'lokalhoszt-group-4',
  sessionTimeout: 30000,
  heartbeatInterval: 3000
})

const run = async () => {
  console.log('🔄 Várakozás a Kafka felállására...')
  await new Promise((resolve) => setTimeout(resolve, 5000))

  console.log('🔌 Csatlakozás a Kafka brokerhez...')
  await consumer.connect()

  console.log('📝 Feliratkozás a témára...')
  await consumer.subscribe({ topic: 'lokalhoszt-topic', fromBeginning: true })

  console.log('👂 Várakozás üzenetekre...')
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`📥 Üzenet érkezett:\n${message.value.toString()}`)
    }
  })
}

run().catch((e) => {
  console.error('❌ Hiba történt a consumerben:', e.message)
  process.exit(1)
})
