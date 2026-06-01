import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


async function main() {
  const password = await bcrypt.hash("password123", 10);
  const user = await prisma.user.upsert({
    where: { email: "demo@daycare.com" },
    update: {},
    create: {
      email: "demo@daycare.com",
      password,
      name: "Demo User",
      simulations: {
        create: {
          businessName: "Sunshine Daycare Center",
          operatingHours: 10,
          operatingDays: 250,
          status: "COMPLETED",
          revenueSources: {
            create: [
              { name: "Tuition", amount: 15000 },
              { name: "Application Fee", amount: 500 },
            ],
          },
          expenseItems: {
            create: [
              { name: "Staff Salaries", amount: 10000 },
              { name: "Food Supplies", amount: 6300 },
              { name: "Rent", amount: 2000 },
              { name: "Utilities", amount: 400 },
              { name: "Supplies", amount: 600 },
            ],
          },
          classrooms: {
            create: [
              { name: "Toddler Room", capacity: 10, staffRatio: 4, enrolled: 8 },
              { name: "Pre school Room", capacity: 15, staffRatio: 6, enrolled: 12 },
            ],
          },
          businessGoals: {
            create: [
              { name: "Increase Enrollment", targetValue: 15, unit: "%" },
              { name: "Reduce supply costs", targetValue: 10, unit: "%" },
            ],
          },
        },
      },
    },
  });
  console.log("Seeded:", user.email);
}

main().catch(console.error).finally(() => prisma.$disconnect());