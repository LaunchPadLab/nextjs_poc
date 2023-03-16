-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" TEXT,
    "mass" INTEGER NOT NULL,
    "hair_color" TEXT,
    "skin_color" TEXT,
    "eye_color" TEXT,
    "gender" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
