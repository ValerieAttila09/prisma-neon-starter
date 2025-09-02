import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import prisma from "../config/client"

dotenv.configDotenv()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/neon-prisma/api/users', async (req, res) => {
  try {
    res.status(200).json({
      error: false,
      message: "Connected to Prisma Neon Backend Project!"
    })
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Connection Failed!",
      errorMsg: err
    })
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/")
})