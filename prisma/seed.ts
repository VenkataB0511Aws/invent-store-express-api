import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
    const prisma = new PrismaClient();
    await prisma.products.deleteMany();
    await prisma.expenseSummary.deleteMany();
    await prisma.sales.deleteMany();
    await prisma.salesSummary.deleteMany();
    await prisma.purchases.deleteMany();
    await prisma.purchaseSummary.deleteMany();
    await prisma.users.deleteMany();
    await prisma.expenses.deleteMany();
    await prisma.expenseByCategory.deleteMany();    


    await prisma.products.createMany({ data: sampleData.products });
    await prisma.expenseSummary.createMany({ data: sampleData.expenseSummary });
    await prisma.sales.createMany({ data: sampleData.sales });
    await prisma.salesSummary.createMany({ data: sampleData.salesSummary });
    await prisma.purchases.createMany({ data: sampleData.purchases });
    await prisma.purchaseSummary.createMany({ data: sampleData.purchaseSummary });
    await prisma.users.createMany({ data: sampleData.users });
    await prisma.expenses.createMany({ data: sampleData.expenses });
    await prisma.expenseByCategory.createMany({ data: sampleData.expenseByCategory });
    /*const users = [];
    for (const user of sampleData.users) {
        const password = await hash(user.password);
        users.push({ ...user, password });
    }
    await prisma.user.createMany({ data: users });
   */

    console.log('Databasae Seeded Successfully')
}

main();