import {IsString, IsEmail, ValidationArguments, IsNotEmpty} from "class-validator";

export class loginDto {
    @IsString()
    @IsEmail({},
        {
            message: (args: ValidationArguments) => {
                if(typeof args.value == "undefined" || args.value == ""){
                    return `Please enter your email address.`
                } else {
                    return `Please enter a valid email address.`
                }
            }
        }
        )
    email: string;

    @IsNotEmpty({
        message: `Please enter your password.`
    })
    password: string;
}