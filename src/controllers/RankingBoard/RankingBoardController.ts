import { Request, Response } from 'express'
import { CreateUserService } from '../../services/User/CreateUserService'
import { RankingBoardService } from '../../services/RankingBoard/RankingBoardService';


class RankingBoardController{
  async handle(req: Request, res: Response){
   
    const rankingBoardService = new RankingBoardService();
    const board = await rankingBoardService.execute();
    return res.json(board);
  }
}
export { RankingBoardController }