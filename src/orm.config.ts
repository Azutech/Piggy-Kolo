import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import {config} from 'dotenv'

config()
const configService = new ConfigService()

export const configORM: TypeOrmModuleOptions = {
  type: 'postgres',
  username: configService.get("POSTGRES_USER"),
  password: configService.get("POSTGRES_PASSWORD"),
  port: configService.get("POSTGRES_PORT"),
  host: configService.get('POSTGRES_HOST'),
  database: configService.get('POSTGRES_DATABASE'),
  synchronize: true,
  entities: ['dist/**/*entity{.ts,.js}'],
};
