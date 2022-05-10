import db from "../db.js";

export const getItens = async (req, res) => {
    try {
        const { user } = res.locals;
        res.status(201).send(user.itens);
    } catch {
        res.sendStatus(500);
    }
}

export const postItens = async (req, res) => {
    try {
        const { value, description, type, date } = req.body;
        const { user } = res.locals;
        const { itens } = user;
        await db.collection("users").updateOne(user, {
            $push: {
                itens: {
                    value: Number(value),
                    description,
                    type,
                    date,
                    id: itens.length ? Number(itens[itens.length - 1].id) + 1 : 0
                }
            }
        })
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}