import { Prisma } from '@prisma/client';

export class Songs implements Prisma.SongsCreateInput {
  id?: number;
  name: string;
  band: string;
  year: number;
}
