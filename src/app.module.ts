import {Module} from '@nestjs/common';
import {UserController} from './user/user.controller';
import {UserService} from './user/user.service';
import {User} from './user/user';

@Module({
	imports: [],
	controllers: [UserController],
	providers: [UserService, User]
})
export class AppModule {}
