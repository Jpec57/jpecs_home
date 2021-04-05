import { Request, Response } from "express";
import { Exercise, ExerciseInterface } from "../models/exercice";
import { UpdateOptions, DestroyOptions } from "sequelize";
import { Training, TrainingInterface } from "../models/training";

export class TrainingController {  

  public index(req: Request, res: Response) {
    Training.findAll<Training>({})
      .then((nodes: Array<Exercise>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: TrainingInterface = req.body;

    Training.create<Training>(params)
      .then((exercice: Training) => res.status(201).json(exercice))
      .catch((err: Error) => res.status(500).json(err));
  }



  /// SHOW
  public show(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);

    Training.findByPk<Training>(exerciseId)
      .then((exercise: Training | null) => {
        if (exercise) {
          res.json(exercise);
        } else {
          res.status(404).json({ errors: ["training not found"] });
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

    Training.update(params, update)
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

    Training.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}