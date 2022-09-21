import express from "express";
import passport from "passport";
import { UserModel } from "../schemas/user.model";


const router = express.Router();



router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/login/google', passport.authenticate('google',{scope: ['profile','email']}));

export default router;