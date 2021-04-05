import { Request, Response } from "express";
import { DestroyOptions, UpdateOptions } from "sequelize/types";
import { Exercise, ExerciseInterface } from "../models/exercice";

export class ExerciseController {

  public index(req: Request, res: Response) {
    Exercise.findAll<Exercise>({})
      .then((nodes: Array<Exercise>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: ExerciseInterface = req.body;

    Exercise.create<Exercise>(params)
      .then((exercice: Exercise) => res.status(201).json(exercice))
      .catch((err: Error) => res.status(500).json(err));
  }



  /// SHOW
  public show(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);

    Exercise.findByPk<Exercise>(exerciseId)
      .then((exercise: Exercise | null) => {
        if (exercise) {
          res.json(exercise);
        } else {
          res.status(404).json({ errors: ["exercise not found"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  /// UPDATE
  public update(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);
    const params: ExerciseInterface = req.body;

    const update: UpdateOptions = {
      where: { id: exerciseId },
      limit: 1,
    };

    Exercise.update(params, update)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  /// DELETE 
  public delete(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);
    const options: DestroyOptions = {
      where: { id: exerciseId },
      limit: 1,
    };

    Exercise.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}