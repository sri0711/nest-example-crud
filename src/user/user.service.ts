import {Injectable} from '@nestjs/common';
import {UserInterface, UserQuery} from './user';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {nanoid} from 'nanoid';

@Injectable()
export class UserService {
	constructor(
		@InjectModel('users')
		private readonly userModel: Model<UserInterface>
	) {}

	async listUsers(user_id: string) {
		try {
			const query: UserQuery = {};
			if (user_id) {
				query.user_id = user_id;
			}

			const users = await this.userModel.find(query).lean();
			return {
				message: 'users list',
				data: users
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

	async createUser(user: UserInterface) {
		try {
			user.user_id = nanoid(7);
			const newUser = new this.userModel(user);
			await newUser.save();
			return {
				message: 'user created',
				data: newUser
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
