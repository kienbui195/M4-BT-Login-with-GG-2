"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./src/routers/router"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8080;
const DB_URL = 'mongodb://localhost:27017/dbdemo';
app.use(body_parser_1.default.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use((0, express_session_1.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 30000
    }
}));
app.use('/', router_1.default);
mongoose_1.default.connect(DB_URL)
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err.message));
app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map