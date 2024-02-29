import {Injectable} from '@nestjs/common';
import {UserInterface} from './user';

@Injectable()
export class UserService {
	listusers() {
		try {
			return {
				message: 'listusers',
				data: [
					{user: 1, name: 'John'},
					{user: 2, name: 'Jose'}
				]
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

	createUser(user: UserInterface) {
		try {
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
