import {AdminService} from './admin.service';
import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {Request} from 'express';
import Responder from '../app/Responder';

@Controller('admin')
export class AdminController {
	constructor(private adminService: AdminService) {}
	@Post('login')
	async Login(@Body() payload, @Res() response: Response): Promise<object> {
		const result = await this.adminService.Login(payload);
		return Responder(response, result);
	}

	@Post('verify')
	async Verify(
		@Req() request: Request,
		@Res() response: Response
	): Promise<object> {
		return Responder(response, {
			message: 'verified successfully',
			data: request?.authenticationObject
		});
	}
}
