import {IsEmail, IsString, IsNotEmpty, ValidationArguments, MaxLength, MinLength} from "class-validator";

export class SignupDto {
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
    @MaxLength(30)
    @MinLength(8, {
        message: `Password should be minimum 8 characters long.`
    })
    password: string;
}