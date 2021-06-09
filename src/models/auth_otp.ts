import { IsDefined } from "class-validator";

export class PostOne {
  @IsDefined()
  phone: string;

  @IsDefined()
  language: string;
}
