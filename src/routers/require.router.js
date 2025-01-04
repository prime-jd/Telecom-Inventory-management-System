import { Router } from "express";


const router = Router()

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser);


export default router;
