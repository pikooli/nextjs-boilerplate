import { PrismaClient } from '@prisma/client';
// import { hideUserFieldsMiddleware } from './middlewares/users';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

// prisma.$use(hideUserFieldsMiddleware());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
