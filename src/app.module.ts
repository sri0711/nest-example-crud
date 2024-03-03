import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import Config from './app/Config';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

console.log(Config);

@Module({
	imports: [
		MongooseModule.forRoot(Config?.DB_URL_1),
		UserModule,
		AdminModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
