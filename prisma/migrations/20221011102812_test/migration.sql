/*
  Warnings:

  - You are about to drop the column `path` on the `CarImage` table. All the data in the column will be lost.
  - Added the required column `url` to the `CarImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarImage" DROP COLUMN "path",
ADD COLUMN     "url" TEXT NOT NULL;
