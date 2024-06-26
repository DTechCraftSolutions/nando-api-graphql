import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../repositories/database/prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DataModule {}
