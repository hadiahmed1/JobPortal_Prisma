import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.user.createMany({
        data:[
            {name:"Hadi Ahmed", email:"969hadiahmed@gmail.com"},
            {name:"Qadir Ahmed", email:"969qadirahmed@gmail.com"},
            {name:"Bob", email:"Bob@example.com.com"},
            {name:"alice", email:"alice@example.com.com"},
        ]
    })
}

export default seed;