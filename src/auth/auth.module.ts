import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../schemas/UserSchemas/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from 'src/schemas/UserSchemas/users.schemas';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Users.name, schema: UserSchema
  },])],
  controllers: [AuthController, ],
  providers: [AuthService, UserRepository]
})
export class AuthModule {}
