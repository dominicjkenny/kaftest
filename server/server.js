import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import consumer from './Controllers/KafkaProvider'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(consumer)
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
