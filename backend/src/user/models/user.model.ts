import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { Sticky } from 'src/sticky/models/sticky.model'

@ObjectType()
export class User {
    @Field((type) => Int)
    id: number

    @Field()
    @IsEmail()
    email: string

    @Field((type) => String, { nullable: true })
    name?: string | null

    @Field((type) => [Sticky], { nullable: true })
    stickies?: [Sticky] | null
}