import { Router } from "express";
import verifyToken from "../middleware/VerifyToken";
import * as ProductController  from "../controllers/product-controller";

const router = Router();

router.post('/', verifyToken, ProductController.createProduct);

export default router;