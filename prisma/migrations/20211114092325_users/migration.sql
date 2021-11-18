/*
  Warnings:

  - The required column `id` was added to the `usertopic` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "usertopic_topicId_key";

-- DropIndex
DROP INDEX "usertopic_userId_key";

-- AlterTable
ALTER TABLE "usertopic" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "usertopic_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "usertopicId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_usertopicId_fkey" FOREIGN KEY ("usertopicId") REFERENCES "usertopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
