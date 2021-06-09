import { Controller, Param, Get, Post, Body, Res } from "routing-controllers";
import "reflect-metadata";
import { PostOne } from "../models/auth_otp";
import AuthOtpActions from "../actions/auth_otp";
import { Response } from "express";

@Controller()
export class AuthOtp {
  @Get("/test1")
  getAll(): string {
    console.log("do something in GET function...");
    return "This action returns all users in test-1";
  }

  @Get("/test1/:id")
  getOne(@Param("id") id: number): string {
    return "This action returns user #" + id + " in test-1";
  }

  @Post("/test1")
  post(@Body() payload: PostOne, @Res() res: Response): Promise<void> {
    return AuthOtpActions.add({
      ...payload,
      otp: 1234,
    }).then((result) => {
      res.send(result);
    });
  }
}
