const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");
const urlRoute = require("./routes/urlRoute");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", urlRoute);

module.exports = app;
