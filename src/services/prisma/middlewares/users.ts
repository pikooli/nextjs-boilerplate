import { Prisma, User } from '@prisma/client';

export const hideUserFieldsMiddleware = (): Prisma.Middleware => {
  return async (params, next) => {
    const result = await next(params);

    if (params.model === 'User' && params.action === 'findMany') {
      return result.map((user: User) => {
        return { ...user, password: undefined };
      });
    } else if (params.model === 'User' && params.action === 'findUnique') {
      return { ...result, password: undefined };
    }

    return result;
  };
};
