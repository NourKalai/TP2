import { IsNotEmpty, IsString ,MinLength,MaxLength} from 'class-validator';

export class AddTodoDto {
   // obligatory and <10 and >3   
   @IsString()
   @IsNotEmpty()
   @MinLength(3,{
   
       message:'the length of the name has to be more than 3 chars'
   })
   @MaxLength(10,
       {
       message:'the length of the name has to be less than 10 chars'

       })
   name:string;


// description less than 10 caract and obligatory
   @IsString()
   @IsNotEmpty()
   @MinLength(10,{
       message:'the length of the description has to be more than 10 chars'

   })
   description:string;
}