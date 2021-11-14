import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const topics = await prisma.topicslist.findMany();
  res.status(200).json({ topics });
}
