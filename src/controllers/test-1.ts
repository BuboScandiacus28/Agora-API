import { Controller, Param, Get } from "routing-controllers";
import "reflect-metadata";

@Controller()
export class Test1Controller {
  @Get("/test1")
  getAll(): string {
    console.log("do something in GET function...");
    return "This action returns all users in test-1";
  }

  @Get("/test1/:id")
  getOne(@Param("id") id: number): string {
    return "This action returns user #" + id + " in test-1";
  }
}
