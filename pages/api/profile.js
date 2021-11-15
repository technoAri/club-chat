import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const email = 'ayush@gmail.com'
    const result = await prisma.$queryRaw`SELECT * FROM profile WHERE email = ${email}`
    res.status(200).json({ result });
}
