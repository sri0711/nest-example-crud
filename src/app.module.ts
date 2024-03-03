import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import Config from './app/Config';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

@Module({
	imports: [
		MongooseModule.forRoot(Config?.DB_URL_1, {
			connectionName: 'users'
		}),
		MongooseModule.forRoot(Config?.DB_URL_2, {
			connectionName: 'admin'
		}),
		AdminModule,
		UserModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
