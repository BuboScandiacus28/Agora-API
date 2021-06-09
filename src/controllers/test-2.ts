import { Controller, Param, Get } from "routing-controllers";
import "reflect-metadata";

@Controller()
export class Test2Controller {
  @Get("/test2")
  getAll(): string {
    return "This action returns all users in test-2";
  }

  @Get("/test2/:id")
  getOne(@Param("id") id: number): string {
    return "This action returns user #" + id + " in test-2";
  }
}
