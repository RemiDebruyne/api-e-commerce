import { isEmail, isString, Length } from "class-validator";

export class CreateUserDto {
  @isString()
  @Length(5, 50)
  pseudo: string;

  @isEmail()
  @Length(2, 75)
  mail: string;
}
