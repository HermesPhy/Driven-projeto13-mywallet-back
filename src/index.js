import express, { json } from "express";
import cors from 'cors';
import Joi from "joi";
import dayjs from "dayjs";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(json());
app.use(cors());

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);
const promise = mongoClient.connect();
promise.then(() => {
    db = mongoClient.db("batepapo-uol");
    console.log(chalk.green.bold("Sua conexão com o banco de dados está de pé"));
});
promise.catch(e => console.log(chalk.red.bold("O banco de dados não aceitou sua conexão"), e));

