import { Request, Response } from 'express'
import { CreateUserService } from '../../services/User/CreateUserService'


class CreateUserController{
  async handle(req: Request, res: Response){
    const  { name, points } = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      points
    });
    return res.json(user)

  }
}
export { CreateUserController }