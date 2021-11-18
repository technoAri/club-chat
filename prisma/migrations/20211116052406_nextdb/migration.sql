/*
  Warnings:

  - You are about to drop the column `email` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isAuthenticated` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `joinedDate` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "email",
DROP COLUMN "isAuthenticated",
DROP COLUMN "joinedDate",
DROP COLUMN "name";
