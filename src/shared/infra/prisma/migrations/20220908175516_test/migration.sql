/*
  Warnings:

  - The primary key for the `Specification_cars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Specification_cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Specification_cars" DROP CONSTRAINT "Specification_cars_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Specification_cars_pkey" PRIMARY KEY ("car_id", "specification_id");
