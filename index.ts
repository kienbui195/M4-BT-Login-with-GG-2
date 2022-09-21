import bodyParser from "body-parser";
import router from "./src/routers/router";
import mongoose from "mongoose";
import session from "express-session";
import express from "express";
import path from "path";
import passport from "passport";

const app = express();
const port = 8080;
const DB_URL = 'mongodb://localhost:27017/dbdemo'

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 30000
    }
}));

app.use('/', router);

mongoose.connect(DB_URL)
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err.message));

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
})