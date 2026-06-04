-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "defaultGrowthRate" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "defaultGrowthPeriod" TEXT NOT NULL DEFAULT 'Annually',
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "fiscalYearStart" INTEGER NOT NULL DEFAULT 1,
    "notifWelcome" BOOLEAN NOT NULL DEFAULT true,
    "notifReportReady" BOOLEAN NOT NULL DEFAULT true,
    "notifProductUpdates" BOOLEAN NOT NULL DEFAULT false,
    "notifWeeklyDigest" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
