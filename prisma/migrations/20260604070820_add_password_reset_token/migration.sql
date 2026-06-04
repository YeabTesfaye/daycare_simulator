-- CreateTable
CREATE TABLE "BudgetScenario" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'My Scenario',
    "studentCount" INTEGER NOT NULL,
    "tuitionFee" DOUBLE PRECISION NOT NULL,
    "growthRate" DOUBLE PRECISION NOT NULL,
    "growthPeriod" TEXT NOT NULL DEFAULT 'Annually',
    "staffSalaries" DOUBLE PRECISION NOT NULL,
    "facilityCosts" DOUBLE PRECISION NOT NULL,
    "supplies" DOUBLE PRECISION NOT NULL,
    "administrative" DOUBLE PRECISION NOT NULL,
    "classroomCapacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetScenario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BudgetScenario" ADD CONSTRAINT "BudgetScenario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
