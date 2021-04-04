import { TrainingController } from "../fitness/controllers/training_controller";
import * as express from "express";
import { MainController } from "../fitness/controllers/main_controller";

export class Routes {
  public trainingController: TrainingController = new TrainingController();
  public mainController: MainController = new MainController();


  public routes(app: express.Application): void {
    app.route("/").get(this.mainController.index);
    // app.use('/fitness', fitnessRoutes);
    app.route("/training").get(this.trainingController.index)
    app.route("/training/exercises").get(this.trainingController.indexExercices)
    app.route("/training/exercises/:id")
      .get(this.trainingController.show)
      .put(this.trainingController.update)
      .delete(this.trainingController.delete);
  }
}