import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

if (!prisma) throw new Error("Cannot access Prisma Client!")

export default prisma