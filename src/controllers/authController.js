import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "../db.js";

export const postUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({
            name,
            email,
            password: passwordHash,
            itens: []
        });
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}