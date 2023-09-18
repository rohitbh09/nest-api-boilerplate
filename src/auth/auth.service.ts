import { BadGatewayException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/schemas/UserSchemas/users.repository';
import { Users } from 'src/schemas/UserSchemas/users.schemas';
import { v4 as uuidV4 } from "uuid";
import { loginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userRepo: UserRepository){}

    async loginUser(loginUser : loginDto): Promise<Users>{
        const { email, password} = loginUser;
        return await this.userRepo.findOne(email);
    }

    async SignUpUser(SignupUser: SignupDto){
        try{
            const {email, password} = SignupUser;

            if(await this.userRepo.findOne(email)){
                throw BadGatewayException
            }
    
            let user = new Users();
            user.userId = uuidV4();
            user.email = email;
            user.pass = password;
    
            return await this.userRepo.create(user);
        } catch (error){
            return ({"Email Already exist in the db": true})
        }
        
    }
}
