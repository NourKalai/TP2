import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/Entity/todo.entity';
import { TodoModule } from './todo/todo.module';



@Module({
  imports: [TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Todo],
      synchronize: true,
      logging: true
    }),],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }