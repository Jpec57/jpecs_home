import { Request, Response } from "express";

export class MainController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Hello boi",
    });
  }

}