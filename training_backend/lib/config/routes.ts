import { TrainingController } from "../controllers/training_controller";
import * as express from "express";
import { ExerciseController } from "../controllers/exercise_controller";

export class Routes {
  public trainingController: TrainingController = new TrainingController();
  public exerciseController: ExerciseController = new ExerciseController();

  public routes(app: express.Application): void {
    app.route("/training").get(this.trainingController.index)
    .post(this.trainingController.create);
    app.route("/training/:id")
      .get(this.trainingController.show)
      .post(this.trainingController.createTrainingData)
      .put(this.trainingController.update)
      .delete(this.trainingController.delete);

    app.route("/exercises")
    .get(this.exerciseController.index)
    .post(this.exerciseController.create)
    app.route("/exercises/:id")
      .get(this.exerciseController.show)
      .put(this.exerciseController.update)
      .delete(this.exerciseController.delete);
  }
}