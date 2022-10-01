import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js"
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
tuitsController(app);
helloController(app);
userController(app);
app.listen(process.env.PORT || 4000);