import { Request, Response } from "express";
import { UpdateOptions, DestroyOptions } from "sequelize";
import { TrainingExercise } from "../config/database";
import { Exercise } from "../models/exercice";
import { ExerciseSet } from "../models/exercice_set";
import { Training, 
  // TrainingExercise,
   TrainingInterface } from "../models/training";

export class TrainingController {  

  public index(req: Request, res: Response) {
    Training.findAll<Training>({})
      .then((nodes: Array<Training>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }

  public test(req: Request, res: Response) {
    // var training = new Training();
    // training.name = "Toto";
    // var set = new ExerciseSet();
    // set.repsOrDuration = 10;
    // set.rest = 15;
    // var exo = new Exercise();
    // exo.restAfter = 60;
    // exo.sets = [set, set];

    // training.exercises = [
    //   exo,
    //   exo,
    // ];

    Training.create<Training>({
      "name" : "Ryuk's Sakadachi",
        "exercises": [
          {
            "id": 1,
            "sets": [
              {
                "repsOrDuration": 6,
                "rest": 60
              },
              {
                "repsOrDuration": 6,
                "rest": 60
              },
              {
                "repsOrDuration": 6,
                "rest": 60
              },
              {
                "repsOrDuration": 6,
                "rest": 60
              },
              {
                "repsOrDuration": 6,
                "rest": 60
              },
              {
                "repsOrDuration": 6,
                "rest": 60
              }
            ],
            "restAfter": 60
          },
        ]
    }, {
      include: [{
        association: TrainingExercise,
        include: [Exercise]
      }]
    });

    
  }
  public create(req: Request, res: Response) {
    if (Array.isArray(req.body)){
      console.log("body", req.body);
      const params: Array<TrainingInterface> = req.body;

      console.log("params", params);
      Training.bulkCreate<Training>(params, {
        include: [{
          association: TrainingExercise,
          include: [Exercise]
        } ]
      })
        .then((exercices: Array<Training>) => res.status(201).json(exercices))
        .catch((err: Error) => res.status(500).json(err));
    } else {
      const params: TrainingInterface = req.body;

      Training.create<Training>(params,{
        include: [{
          association: TrainingExercise,
          include: [Exercise]
        } ]
      })
        .then((exercice: Training) => res.status(201).json(exercice))
        .catch((err: Error) => res.status(500).json(err));
    }
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
    const params: TrainingInterface = req.body;

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