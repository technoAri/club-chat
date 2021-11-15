import { PrismaClient } from '.prisma/client';
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient();
export async function createUserTopic({ userId, topicId }) {
  
  const userTopic = await prisma.usertopic.create({
    data: {
      id: uuidv4(),
      userId: userId,
      topicId: topicId
    },
  })
  return userTopic;
}

export async function getAllTopics() {
    const topics = await prisma.topic.findMany();
    return topics;
}