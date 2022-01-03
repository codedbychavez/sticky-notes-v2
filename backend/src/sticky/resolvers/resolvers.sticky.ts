import 'reflect-metadata'
import {
    Resolver,
    Query,
    Mutation,
    Args,
    ResolveField,
    Root,
    Context,
    Int,
    InputType,
    Field,
    registerEnumType,
    CONTEXT,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { Sticky } from '../models/sticky.model'
import { User } from 'src/user/models/user.model'

import { PrismaService } from 'prisma/services/prisma.service'

@InputType()
export class StickyCreateInput {
    @Field()
    title: string

    @Field({ nullable: true })
    content: string

}

@InputType()
class StickyOrderByUpdatedAtInput {
    @Field((type) => SortOrder)
    updatedAt: SortOrder
}

enum SortOrder {
    asc = 'asc',
    desc = 'desc'
}

registerEnumType(SortOrder, {
    name: 'SortOrder',
})

@Resolver(Sticky)
export class StickyResolver {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    @ResolveField()
    author(@Root() sticky: Sticky): Promise<User | null> {
        return this.prismaService.sticky.findUnique({
            where: {
                id: sticky.id
            }
        }).author()
    }

    @Query((returns) => Sticky, { nullable: true })
    stickyById(@Args('id') id: number) {
        return this.prismaService.sticky.findUnique({
            where: { id }
        })
    }

    @Query((returns) => [Sticky])
    feed(
        @Args('searchString', { nullable: true }) searchString: string,
        @Args('skip', { nullable: true }) skip: number,
        @Args('take', { nullable: true }) take: number,
        @Args('orderBy', { nullable: true }) orderBy: StickyOrderByUpdatedAtInput,
        @Context() ctx,
    ) {
        const or = searchString
        ? {
            OR: [
                {
                    title: { contains: searchString }
                },
                {
                    content: { contains: searchString }
                }
            ],
        }
        : {}

        return this.prismaService.sticky.findMany({
            where: {
                published: true,
                ...or,
            },
            take: take || undefined,
            skip: skip || undefined,
            orderBy: orderBy || undefined,
        })
    }


    @Mutation((returns) => Sticky)
    createDraft(
        @Args('data') data: StickyCreateInput,
        @Args('authorEmail') authorEmail: string,
        @Context() ctx,
    ): Promise<Sticky> {
        return this.prismaService.sticky.create({
            data: {
                title: data.title,
                content: data.content,
                author: {
                    connect: { email: authorEmail },
                },
            },
        })
    }

    @Mutation((returns) => Sticky)
    async togglePublishSticky(@Args('id') id: number): Promise<Sticky | null> {
        const sticky = await this.prismaService.sticky.findUnique({
            where: {
                id: id || undefined
            },
            select: {
                published: true,
            }
        })

        return this.prismaService.sticky.update({
            where: {
                id: id || undefined
            },
            data: { 
                published: !sticky?.published
            }
        })
    }

    @Mutation((returns) => Sticky, { nullable: true })
    async deleteSticky(
        @Args('id') id: number,
        @Context() CONTEXT,
    ): Promise<Sticky | null> {
        return this.prismaService.sticky.delete({
            where: {
                id: id,
            }
        })
    }



}