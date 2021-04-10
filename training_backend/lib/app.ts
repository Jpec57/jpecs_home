import express from "express";
import { database } from "./config/database";
import { Routes } from "./config/routes";
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
      // database
      //   .sync().then(() => console.log("connected to db"))            
      //   .catch(() => {            
      //       throw "error";       
      //    });   
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

export default new App().app;
