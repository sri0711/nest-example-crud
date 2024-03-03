import {Injectable} from '@nestjs/common';
import {AdminInterface} from './admin';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as jwt from 'jsonwebtoken';
import Config from '../app/Config';

@Injectable()
export class AdminService {
	constructor(
		@InjectModel('admins', 'admin')
		private readonly adminModel: Model<AdminInterface>
	) {}
	async Login(payload: AdminInterface) {
		try {
			const adminUser = await this.adminModel
				.findOne({user_id: payload?.user_id})
				.lean();

			if (!adminUser) {
				return {
					error: {
						message: 'User not found',
						status: 400
					}
				};
			}
			if (adminUser.password !== payload?.password) {
				return {
					error: {
						message: 'invalid user or password',
						status: 401
					}
				};
			}
			const adminToken: string = jwt.sign(adminUser, Config?.SECRET, {
				expiresIn: '1h'
			});

			return {
				message: 'login success',
				data: {
					token: adminToken
				}
			};
		} catch (error) {
			return {
				error: {
					message: error?.message || error,
					status: 500
				}
			};
		}
	}
}
