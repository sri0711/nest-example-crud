import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import Config from '../app/Config';
import * as jwt from 'jsonwebtoken';

declare module 'express' {
	interface Request {
		authenticationObject: object;
	}
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	constructor() {}

	use(req: Request, res: Response, next: NextFunction) {
		const whitelistedRoutes: string[] = ['/admin/login'];
		if (whitelistedRoutes.includes(req.url)) {
			next();
		}
		const failureResponse = {
			statusCode: 401,
			success: false,
			message: 'Authentication Failure'
		};
		let token = req?.headers?.authorization;
		if (!token) {
			return res.status(401).json(failureResponse);
		}
		token = token.split(' ')[1];
		try {
			const verification = jwt.verify(token, Config?.SECRET);
			req.authenticationObject = verification;
			next();
		} catch {
			return res.status(401).json(failureResponse);
		}
	}
}
