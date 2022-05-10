import { Router } from "express";

import { deleteItem, getItens, postItens, updateItem } from "../controllers/itensController.js";
import { editItemMiddleware  } from "../middlewares/editItemMiddleware.js";
import { itemMiddleware } from '../middlewares/itemMiddleware.js';
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js';

const itensRouter  = Router();
itensRouter.use(tokenValidation);

itensRouter.get("/itens", getItens);
itensRouter.post("/itens", itemMiddleware, postItens);
itensRouter.delete("/itens/:itemId", deleteItem);
itensRouter.put("/:itemId", editItemMiddleware, updateItem);

export default itensRouter;