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

export const deleteItem = async (req, res) => {
    try {
        const { user } = res.locals;
        const { itemId } = req.params;
        const item = user.itens.find(obj => {
            return Number(obj.id) === Number(itemId);
        })
        await db.collection("users").updateOne(user, {
            $pull: { itens: item }
    })
    res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export const uptadeItem = async (req, res) => {
    try {
        const { value, description } = req.body;
        const { user } = res.locals;
        const { itemId } = req.params;
        await db.collection("users").updateOne(user, {
            $set: {
                "items.$[item].value": Number(value),
                "items.$[item].description": description
                }
            },
            { arrayFilters: [{ "item.id": Number(itemId) }] })
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}