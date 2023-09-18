import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4} from "uuid";
import { Document } from "mongoose";

export type UsersDocument = Users & Document

@Schema()
export class Users{

    @Prop({
        default: function genUUID() {
            return uuidv4();
        }
})
    _id?: string;

    @Prop()
    userId: string;

    @Prop()
    email: string;

    @Prop()
    pass: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);