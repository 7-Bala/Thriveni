import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

const globalForPrisma = globalThis as unknown as { prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined };

const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

export { prisma };
export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaGlobal = prisma;
