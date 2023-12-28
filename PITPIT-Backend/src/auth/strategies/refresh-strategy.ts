import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from "src/user/user.service";
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_SECRET}`
        })
    }

    async validate(payload: any) {
        return { user: payload.sub, username: payload.username };
    }
}