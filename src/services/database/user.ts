import { Prisma, User } from '@prisma/client';
import { prisma } from '@/src/services/prisma';

const userSafeFields: Record<keyof User, boolean> = {
  id: true,
  name: true,
  email: true,
  image: true,
  password: false,
  emailVerifiedAt: true,
  emailVerificationToken: false,
  resetPasswordToken: true,
  resetPasswordAt: true,
  resetPasswordTokenExpiresAt: true,
  createdAt: true,
  updatedAt: true,
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    select: userSafeFields,
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
    select: userSafeFields,
  });
};

export const getUsers = async (filter: Prisma.UserFindManyArgs['where']) => {
  return await prisma.user.findMany({
    where: filter,
    select: userSafeFields,
  });
};

interface CreateUserArgs {
  email: string;
  password: string;
  emailVerificationToken?: string;
}

export const createUser = async ({
  email,
  password,
  emailVerificationToken,
}: CreateUserArgs) => {
  return await prisma.user.create({
    data: {
      email,
      password,
      emailVerificationToken,
    },
    select: userSafeFields,
  });
};

export const updateUserById = async (
  id: string,
  data: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data,
    select: userSafeFields,
  });
};
