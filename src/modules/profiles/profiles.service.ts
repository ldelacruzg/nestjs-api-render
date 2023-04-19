import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async profile(profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput) {
    return this.prisma.profile.findUnique({
      where: profileWhereUniqueInput,
    });
  }

  async createProfile(data: Prisma.ProfileCreateInput) {
    return this.prisma.profile.create({
      data,
    });
  }

  async updateProfile(params: {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.ProfileUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.profile.update({
      where,
      data,
    });
  }

  async deleteProfile(where: Prisma.ProfileWhereUniqueInput) {
    return this.prisma.profile.delete({
      where,
    });
  }
}
