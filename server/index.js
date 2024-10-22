import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from "cors";
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import generalRoutes from "./routes/general.js";

//not boiler plate
import User from './models/User.js';
import { dataUser,dataProduct,dataProductStat,dataTransaction,dataOverallStat,dataAffiliateStat } from "./data/index.js"
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';

//nbp

dotenv.config();
const app = express();
app.use(express.json() );
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( { policy: "cross-origin" } ));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// till here Boilerplate exports ones commented nbp

//Routes
app.use("/client",clientRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);
app.use("/general",generalRoutes);

//Mongo setup

const PORT= process.env.PORT || 9000;
const MONGO_URL= process.env.MONGO_URL;
mongoose
.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
    /*Initially used to add user in mongoDB ,then commented ofr the purpose of avoiding data duplication */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
})

.catch((error) => console.log(`${error} did not connect`)
)





