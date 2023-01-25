const { PrismaClient } = require("@prisma/client")

const express = require("express")

const prisma = new PrismaClient()
const app = express()

// Routers
const userRouter = require("./api/users/router");

app.use(express.json())

app.use("/api/v1/users",userRouter);
  
// ... your REST API routes will go here

app.listen(3000, () =>
  console.log('listening 3000'),
)