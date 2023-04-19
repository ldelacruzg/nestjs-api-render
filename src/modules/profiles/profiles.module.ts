import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProfilesService],
})
export class ProfilesModule {}
