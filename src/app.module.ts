import {Module} from '@nestjs/common';
import {UserController} from './user/user.controller';
import {UserService} from './user/user.service';
import {MongooseModule} from '@nestjs/mongoose';
import Config from './app/Config';

@Module({
	imports: [
		MongooseModule.forRoot(Config?.DB_URL_1, {
			connectionName: 'users'
		}),
		MongooseModule.forRoot(Config?.DB_URL_2, {
			connectionName: 'admin'
		})
	],
	controllers: [UserController],
	providers: [UserService]
})
export class AppModule {}
