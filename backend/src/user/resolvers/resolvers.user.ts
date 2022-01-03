import 'reflect-metadata'
import { 
    Resolver,
    Query,
    Mutation,
    Args,
    Context,
    ResolveField,
    Root,
    InputType,
    Field,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { Sticky } from 'src/sticky/models/sticky.model'
import { User } from '../models/user.model'
import { PrismaService } from 'prisma/services/prisma.service'
import { StickyCreateInput } from 'src/sticky/resolvers/resolvers.sticky'

@InputType()
class UserUniqueInput {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    email: string
}

@InputType()
class UserCreateInput {
    @Field()
    email: string

    @Field({ nullable: true })
    name: string

    @Field((type) => [StickyCreateInput], { nullable: true })
    stickies: [StickyCreateInput]
}

@Resolver(User)
export class UserResolver {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    @ResolveField()
    async stickies(@Root() user: User, @Context() ctx): Promise<Sticky[]> {
        return this.prismaService.user.findUnique({
            where: {
                id: user.id,
            }
        }).stickies()
    }

@Mutation((returns) => User)
async signUpUser(
    @Args('data') data: UserCreateInput,
    @Context() ctx,
): Promise<User> {
    const postData = data.stickies?.map((sticky) => {
        return { title: sticky.title, content: sticky.content || undefined }
    })

    return this.prismaService.user.create({
        data: {
            email: data.email,
            name: data.name,
            stickies: {
                create: postData,
            }
        }
    })
}

@Query((returns) => [User], { nullable: true })
async allUsers(@Context() ctx) {
    return this.prismaService.user.findMany()
}

@Query((returns) => [Sticky], { nullable: true })
async draftsByUser(
    @Args('userUniqueInput') userUniqueInput: UserUniqueInput,
): Promise<Sticky[]> {
    return this.prismaService.user.findUnique({
        where: {
            id: userUniqueInput.id || undefined,
            email: userUniqueInput.email || undefined,
        },
    }).stickies({
        where: {
            published: false,
        }
    })
}


}