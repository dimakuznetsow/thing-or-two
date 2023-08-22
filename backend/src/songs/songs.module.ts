import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SongsController],
  providers: [SongsService, PrismaService],
})
export class SongsModule {}
