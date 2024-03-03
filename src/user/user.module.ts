import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {userSchema} from '../model/user.model';
import {UserController} from './user.controller';
import {UserService} from './user.service';

@Module({
	imports: [MongooseModule.forFeature([{name: 'users', schema: userSchema}])],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService]
})
export class UserModule {}
