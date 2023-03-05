
// express
const express = require("express");

// Global error handler
const geh = require("./geh")

// App Error
const AppError = require("./utils/appError");

// Cros errors
const cors = require('cors');

const app = express();

app.use(cors());

// Routers
const adminRouter = require("./api/admin/router");
const poolRouter = require("./api/pool/router")
const examGroupRouter = require("./api/examGroups/router")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/pool", poolRouter);
app.use("/api/v1/examGroups", examGroupRouter);

// Handle urls which don't exist
app.all("*", (req, res, next) => {
  return next(
    new AppError(
      `${req.protocol}://${req.get("host")}${req.originalUrl} does not exists.`,
      404
    )
  );
});
// ... your REST API routes will go here

app.listen(3000, () =>
  console.log('listening 3000'),
);

// Use global error handler
app.use(geh);