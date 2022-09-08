-- CreateTable
CREATE TABLE "Specification_cars" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "car_id" UUID NOT NULL,
    "specification_id" UUID NOT NULL,

    CONSTRAINT "Specification_cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Specification_cars" ADD CONSTRAINT "Specification_cars_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specification_cars" ADD CONSTRAINT "Specification_cars_specification_id_fkey" FOREIGN KEY ("specification_id") REFERENCES "Specifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
