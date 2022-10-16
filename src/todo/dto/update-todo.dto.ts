import {  IsNotEmpty,  IsOptional,  IsString,MinLength,MaxLength } from 'class-validator';
import { todoStatusEnum } from '../generics/todoStatusEnum';

export class UpdatetodoDto{
    @IsOptional()
    @IsString()
    @MinLength(3,{
        message:'the length of the name has to be more than 3 chars'
    })
    @MaxLength(10,
        {
        message:'the length of the name has to be less than 10 chars'

        })
    name:string;

    @IsOptional()
    @IsString()
    @MinLength(10,{
        message:'the length of the description has to be more than 10 chars'
 
    })
    description:string;
    
    status:todoStatusEnum;
}