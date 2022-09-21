"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/login/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
exports.default = router;
//# sourceMappingURL=router.js.map