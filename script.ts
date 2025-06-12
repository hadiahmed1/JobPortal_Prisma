import express from "express"
import asyncHandler from "./src/helper/asyncHandler"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/user', asyncHandler(async (req, res, next) => {
    const users = await prisma.user.findMany({
        where:{email:{startsWith:"969"}},
        
    });
    res.status(200).send({ success: true, users });
}))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
