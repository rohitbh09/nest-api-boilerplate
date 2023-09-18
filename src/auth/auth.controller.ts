import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login(@Body() userDto: loginDto) {
        return await this.authService.loginUser(userDto);
    }

    @Post('Signup')
    async Signup(@Body() signupUser: SignupDto) {
        return await this.authService.SignUpUser(signupUser);
    }
}
