"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const RankingBoardController_1 = require("./controllers/RankingBoard/RankingBoardController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/ranking', new RankingBoardController_1.RankingBoardController().handle);
router.post('/register-score', new CreateUserController_1.CreateUserController().handle);