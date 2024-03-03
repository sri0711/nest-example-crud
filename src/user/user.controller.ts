import {Body, Controller, Get, Post, Param, Res} from '@nestjs/common';
import {UserService} from './user.service';
import responder from '../app/Responder';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('list/:user_id?')
	async listUsers(
		@Param('user_id') user_id?: string,
		@Res() res?: Response
	): Promise<object> {
		console.log(user_id);
		const result = await this?.userService?.listUsers(user_id);
		return responder(res, result);
	}

	@Post('create')
	async createUser(
		@Body() requestData,
		@Res() res: Response
	): Promise<object> {
		const result = await this?.userService?.createUser(requestData);
		return responder(res, result);
	}
}
