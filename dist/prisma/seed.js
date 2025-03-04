"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const sample_data_1 = __importDefault(require("./sample-data"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        yield prisma.products.deleteMany();
        yield prisma.expenseSummary.deleteMany();
        yield prisma.sales.deleteMany();
        yield prisma.salesSummary.deleteMany();
        yield prisma.purchases.deleteMany();
        yield prisma.purchaseSummary.deleteMany();
        yield prisma.users.deleteMany();
        yield prisma.expenses.deleteMany();
        yield prisma.expenseByCategory.deleteMany();
        yield prisma.products.createMany({ data: sample_data_1.default.products });
        yield prisma.expenseSummary.createMany({ data: sample_data_1.default.expenseSummary });
        yield prisma.sales.createMany({ data: sample_data_1.default.sales });
        yield prisma.salesSummary.createMany({ data: sample_data_1.default.salesSummary });
        yield prisma.purchases.createMany({ data: sample_data_1.default.purchases });
        yield prisma.purchaseSummary.createMany({ data: sample_data_1.default.purchaseSummary });
        yield prisma.users.createMany({ data: sample_data_1.default.users });
        yield prisma.expenses.createMany({ data: sample_data_1.default.expenses });
        yield prisma.expenseByCategory.createMany({ data: sample_data_1.default.expenseByCategory });
        /*const users = [];
        for (const user of sampleData.users) {
            const password = await hash(user.password);
            users.push({ ...user, password });
        }
        await prisma.user.createMany({ data: users });
       */
        console.log('Databasae Seeded Successfully');
    });
}
main();
