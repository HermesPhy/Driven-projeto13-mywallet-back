import { Router } from "express";

import authRouter from "./authRouter.js";
import itensRouter from "./itensRouter.js";

const router = Router();
router.use(authRouter);
router.use(itensRouter);

export default router;