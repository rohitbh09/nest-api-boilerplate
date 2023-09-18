import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Users, UsersDocument } from "./users.schemas";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>){}

    async findOne(userFilterQuery): Promise<Users>{
        let user = await this.userModel.findOne(userFilterQuery);
        return user;
    }

    async create(user: Users): Promise<Users>{
        const newUser =  new this.userModel(user);
        return newUser.save();
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<Users>): Promise<Users> {
        return this.userModel.findOneAndUpdate(userFilterQuery);
    }

    async find(userFilterQuery: FilterQuery<Users>): Promise<Users[]>{
        return this.userModel.find(userFilterQuery);
    }
}