import prismaClient from "../../prisma";



interface UserRequest{
  name:string;
  points : number;
}
class RankingBoardService{
  async execute(){
      

    const fetchUsers = await prismaClient.users.findMany({
      
      select:{
        name: true,
        points: true,
      
      },
  
      orderBy:{
        points:'desc'
      },
      take:10,
    });
    console.log(" Users")
    return fetchUsers;
}
}
export { RankingBoardService }