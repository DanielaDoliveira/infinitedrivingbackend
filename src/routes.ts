import {Request, Router, Response} from 'express'
import { CreateUserController } from './controllers/User/CreateUserController'
import { RankingBoardController } from './controllers/RankingBoard/RankingBoardController';

const router = Router();

router.get('/ranking', new RankingBoardController().handle);
router.post('/register-score', new CreateUserController().handle);
export { router };