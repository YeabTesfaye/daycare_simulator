/*
  Warnings:

  - Changed the type of `growthPeriod` on the `BudgetScenario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "GrowthPeriod" AS ENUM ('Monthly', 'Quarterly', 'Annually');

-- AlterTable
ALTER TABLE "BudgetScenario" DROP COLUMN "growthPeriod",
ADD COLUMN     "growthPeriod" "GrowthPeriod" NOT NULL;
