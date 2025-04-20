const express = require("express");
const mainRouter = require('./router/index');
const cors = require("cors");

app.use(cors());

const app = express();
app.use(express.json());


app.use('/api/v1', mainRouter);

app.listen(3000);