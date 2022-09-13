/*
  Warnings:

  - Added the required column `path` to the `CarImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarImage" ADD COLUMN     "path" TEXT NOT NULL;
