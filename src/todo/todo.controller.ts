import { Controller,Get,Post,Delete,Put,Patch,Param,Body, Version, ParseIntPipe  } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import {TodoService}  from  './todo.service'
import { Todo } from './Entity/todo.entity';
import { UpdatetodoDto } from './dto/update-todo.dto';
import { todoStatusEnum } from './generics/todoStatusEnum';

@Controller('todo')
export class TodoController {
    constructor(
        private TodoService: TodoService
    ){

    }

    private todos =[];
    @Post()
    async AddTodo(
        @Body() addTodoDto: AddTodoDto
    ):Promise<Todo>{
        return await  this.TodoService.addTodo(addTodoDto);
    }

 
    @Patch(':id')
    async updateTodo(
        @Body() updatetodoDto:UpdatetodoDto,
        @Param('id',ParseIntPipe) id:number):Promise<Todo>
        {
            return await this.TodoService.updateTodo(id,updatetodoDto);
        }
 
 
    @Get('count')
    async nombretodobystatus(){
        return await this.TodoService.todoByStatus();
    }


    @Get(':status')
    getBystatus(@Param('status')status:todoStatusEnum ){
        return this.TodoService.getTodoByCriteria(status);
    }
     @Get()
     async getTodo():Promise<Todo[]>{
            return  await this.TodoService.getTodo();
     } 

     @Get(':id')
     findOne(@Param('id', ParseIntPipe) id: number) {
     
     return this.TodoService.getTodobyId(id);
  }

  
    @Delete(':id')
    async deletetodo(@Param('id',ParseIntPipe) id:number){
        return this.TodoService.softDelete(id);
    }
    @Get('restore/:id')
    async restoretodo(@Param('id',ParseIntPipe)id:number){
        return await this.TodoService.restoretodo(id);
    }
 
}