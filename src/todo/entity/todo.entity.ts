import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from '../generics/timestamps';
import { todoStatusEnum } from '../generics/todoStatusEnum';
@Entity('todo')
export class Todo extends Timestamp{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

 
  @Column()
  status:todoStatusEnum;
 
}