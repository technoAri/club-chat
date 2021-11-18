import { PrismaClient } from '.prisma/client';
import { v4 as uuidv4 } from 'uuid'
import prisma from '../lib/prisma'

// const prisma = new PrismaClient();
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

export async function getTrendingTopics() {
  const topics = await prisma.topic.findMany({
    where: {
      AND: [
        {
          isTrending: {
            equals: true,
          },
        },
      ]
    },
    take: 5,
    skip: 0,
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
      isTrending: true,
      topics: true,
    }
  });
  return topics;
}

export async function getUserTopics(userId) {
  const topics = await prisma.usertopic.findMany({
    where: {
      AND: [
        {
          userId: {
            equals: userId,
          },
        },
      ]
    },
    take: 25,
    skip: 0,
    select: {
      id: true,
      userId: true,
      topic: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          isTrending: true,
        }
      },
    }
  });
  console.log("HERE", topics)
  return topics;
}