-- CreateTable
CREATE TABLE "Car" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" UUID NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specifications" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Specifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarImage" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "car_id" UUID NOT NULL,
    "images_name" TEXT NOT NULL,

    CONSTRAINT "CarImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "car_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "client_id" UUID NOT NULL,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "proposal_amount" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "driver_license" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTokens" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refresh_token" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "expires_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "UserTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specification_cars" (
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "car_id" UUID NOT NULL,
    "specification_id" UUID NOT NULL,

    CONSTRAINT "Specification_cars_pkey" PRIMARY KEY ("car_id","specification_id")
);

-- CreateTable
CREATE TABLE "_CarToSpecifications" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarToSpecifications_AB_unique" ON "_CarToSpecifications"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToSpecifications_B_index" ON "_CarToSpecifications"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTokens" ADD CONSTRAINT "UserTokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specification_cars" ADD CONSTRAINT "Specification_cars_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specification_cars" ADD CONSTRAINT "Specification_cars_specification_id_fkey" FOREIGN KEY ("specification_id") REFERENCES "Specifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToSpecifications" ADD CONSTRAINT "_CarToSpecifications_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToSpecifications" ADD CONSTRAINT "_CarToSpecifications_B_fkey" FOREIGN KEY ("B") REFERENCES "Specifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
