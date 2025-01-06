import pgs from "pg";
const { Pool } = pgs
import 'dotenv/config'

const client = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})


export const initializeApp = async (callback) => {
  client.connect()

  client.query(`CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customerId VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status VARCHAR(255),
    price INT, 
    estimatedDate TIMESTAMP, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`)

  callback()
}

export const closeConnection = async () => {
  await client.end();
};

export default client