import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/services/prisma.service';
import { UserModule } from './user/user.module';
import { StickyModule } from './sticky/sticky.module';
import { join } from 'path';

// Resolvers
import { StickyResolver } from './sticky/resolvers/resolvers.sticky';
import { UserResolver } from './user/resolvers/resolvers.user';

@Module({
  imports: [
    UserModule, 
    StickyModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' }
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, StickyResolver, UserResolver],
})
export class AppModule {}
