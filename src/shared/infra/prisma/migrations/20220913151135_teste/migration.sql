/*
  Warnings:

  - Added the required column `user_id` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "user_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
