import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/services/prisma.service';
import {
    Sticky,
    Prisma,
} from '@prisma/client'

@Injectable()
export class StickyService {
    constructor(private prisma: PrismaService) {}

    async sticky(stickyWhereUniqueInput: Prisma.StickyWhereUniqueInput): Promise<Sticky | null> {
        return this.prisma.sticky.findUnique({
            where: stickyWhereUniqueInput,
        });
    }

    async stickies(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.StickyWhereUniqueInput;
        where?: Prisma.StickyWhereInput;
        orderBy?: Prisma.StickyOrderByWithRelationInput;
    }): Promise<Sticky[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.sticky.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createSticky(data: Prisma.StickyCreateInput): Promise<Sticky> {
        return this.prisma.sticky.create({
            data,
        });
    }

    async updateSticky(params: {
        where: Prisma.StickyWhereUniqueInput;
        data: Prisma.StickyUpdateInput;
    }): Promise<Sticky> {
        const { data, where } = params;
        return this.prisma.sticky.update({
            data,
            where,
        });
    }

    async deleteSticky(where: Prisma.StickyWhereUniqueInput): Promise<Sticky> {
        return this.prisma.sticky.delete({
            where,
        })
    }

}
