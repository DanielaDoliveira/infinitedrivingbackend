import prismaClient from "../../prisma";



interface UserRequest{
  name:string;
  points : number;
}
class CreateUserService{
  async execute({ name, points }:UserRequest){

    const user = await prismaClient.users.create({
      data:{
        name,
        points
      }
    });
    return user;
   
  }
}
export { CreateUserService }