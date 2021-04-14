

import { Request, Response } from "express";
import { DestroyOptions, UpdateOptions } from "sequelize/types";
import { ExerciseData, ExerciseDataAttributes } from "../models/exercise_data";

export class ExerciseController {

  public index(req: Request, res: Response) {
    ExerciseData.findAll<ExerciseData>({})
      .then((nodes: Array<ExerciseData>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    if (Array.isArray(req.body)){
      const params: Array<ExerciseDataAttributes> = req.body;

      ExerciseData.bulkCreate<ExerciseData>(params)
        .then((exercices: Array<ExerciseData>) => res.status(201).json(exercices))
        .catch((err: Error) => res.status(500).json(err));
    } else {
      const params: ExerciseDataAttributes = req.body;

      ExerciseData.create<ExerciseData>(params)
        .then((exercice: ExerciseData) => res.status(201).json(exercice))
        .catch((err: Error) => res.status(500).json(err));
    }
  }


  /// SHOW
  public show(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);

    ExerciseData.findByPk<ExerciseData>(exerciseId)
      .then((exercise: ExerciseData | null) => {
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
    const params: ExerciseDataAttributes = req.body;

    const update: UpdateOptions = {
      where: { id: exerciseId },
      limit: 1,
    };

    ExerciseData.update(params, update)
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

    ExerciseData.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
