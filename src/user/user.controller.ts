import {Controller, Get, Param, Res} from '@nestjs/common';
import {UserService} from './user.service';
import responder from '../App/Responder';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('list')
	listusers(@Param() params, @Res() res: Response): object {
		const result = this?.userService?.listusers();
		return responder(res, result);
	}
}
