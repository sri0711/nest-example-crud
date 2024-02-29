import * as path from 'node:path';
import * as dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname, '../src/app/.env')});
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
