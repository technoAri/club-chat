/*
  Warnings:

  - You are about to drop the column `authetication_metadata` on the `users` table. All the data in the column will be lost.
  - Added the required column `auth_metadata` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `created_at` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updated_at` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "authetication_metadata",
ADD COLUMN     "auth_metadata" TEXT NOT NULL,
DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
