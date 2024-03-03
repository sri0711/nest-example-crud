import {Module} from '@nestjs/common';
import {AdminController} from './admin.Controller';
import {AdminService} from './admin.service';
import {MongooseModule} from '@nestjs/mongoose';
import {adminSchema} from '@app/model/admin.model';

@Module({
	imports: [
		MongooseModule.forFeature(
			[{name: 'admins', schema: adminSchema}],
			'admin'
		)
	],
	controllers: [AdminController],
	providers: [AdminService]
})
export class AdminModule {}
