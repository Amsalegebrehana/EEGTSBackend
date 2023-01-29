

const express = require("express");

const cors = require('cors');

const app = express();

app.use(cors())
// Routers
const adminRouter = require("./api/admin/router");
const poolRouter = require("./api/pool/router")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/pool", poolRouter);
  
// ... your REST API routes will go here

app.listen(3000, () =>
  console.log('listening 3000'),
)