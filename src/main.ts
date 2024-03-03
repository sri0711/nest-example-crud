import * as path from 'node:path';
import * as dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname, '../src/app/.env')});
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AuthMiddleware} from './middleware/auth.middleware';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(new AuthMiddleware().use);
	await app.listen(3000);
}
bootstrap();
