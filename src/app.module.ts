import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from '@nestjs/config';
import { config} from './orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      entities: ['dist/**/*entity{.ts,.js}']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
