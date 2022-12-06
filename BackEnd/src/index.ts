import { apiRoutes } from "./api/http";
import { connectToTheDatabase } from "./database/connection";
require("dotenv").config();

const express = require("express");
export const app = express();
const cors = require("cors");
const port: any = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectToTheDatabase();
apiRoutes();

app.listen(port, () => {
  console.log("Api listening on port " + port);
});
