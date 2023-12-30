import express from "express";
import exampleRouter from "./example";
import userRouter from "./userRoutes";
import authRouter from "./authRoutes";


const router = express.Router();

router.use("/", exampleRouter);
router.use("/", userRouter);
router.use("/auth", authRouter);

export default router;
