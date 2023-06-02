import express, { json } from "express";
import { routes } from "./routes/routes.js";
import { config } from "dotenv";
config();

import "./models/db.js";
import "./models/holiday-rental.model.js";
// import { errorMiddleware } from "./middlewares/error.middleware.js";
// import { jwtMiddleware } from './middlewares/jwt.middleware.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.static('./uploads'));

app.use(json());

// app.use(jwtMiddleware);

app.use(routes);

// app.use(errorMiddleware);

app.listen(process.env.APP_PORT, () => {
    console.log('listening port ' + APP_PORT);
});