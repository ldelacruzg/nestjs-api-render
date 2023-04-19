import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { PostsModule } from './modules/posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, ProfilesModule, PostsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
