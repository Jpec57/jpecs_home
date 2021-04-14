import { Request, Response } from "express";
import { DestroyOptions, UpdateOptions } from "sequelize";

import {  
  ExerciseExerciseData,
  ExerciseExerciseSet,
  TrainingDataExercises,
  TrainingDataTraining,
  TrainingExercise, 
  TrainingTrainingData} from "../config/database";
import { Training, TrainingAttributes } from "../models/training";
import { TrainingData, TrainingDataAttributes } from "../models/training_data";

export class TrainingController { 
   trainingTotalInclude = [{
    association: TrainingExercise,
    include: [{
      association: ExerciseExerciseSet,
    },
    {
      association: ExerciseExerciseData,
    }
  ]
  }]; 

  public index(req: Request, res: Response) {
    Training.findAll<Training>({
      include: [{
        association: TrainingExercise,
        include: [{
          association: ExerciseExerciseSet,
        },
        {
          association: ExerciseExerciseData,
        }
      ]
      }]
    })
      .then((nodes: Array<Training>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }


  public createTrainingData(req: Request, res: Response) {
    const params: TrainingDataAttributes = req.body;
    TrainingData.create<TrainingData>(params,{
      include: [
        {
          association: TrainingDataTraining,
          include: [
            {
              association: TrainingExercise,
              include: [{
                association: ExerciseExerciseSet,
              },
              {
                association: ExerciseExerciseData,
              }
            ]
            }
          ]
        },
        {
          association: TrainingDataExercises,
          include: [{
            association: ExerciseExerciseSet,
          },
          {
            association: ExerciseExerciseData,
          }
        ]
        }
      ]

    })
      .then((trainingData: TrainingData) => res.status(201).json(trainingData))
      .catch((err: Error) => res.status(500).json(err));
  }


  public create(req: Request, res: Response) {
    // if (Array.isArray(req.body)){
    //   console.log("body", req.body);
    //   const params: Array<TrainingAttributes> = req.body;
    //   Training.bulkCreate<Training>(params, {
    //     include: [{
    //       association: TrainingExercise,
    //       include: [{
    //         association: ExerciseExerciseSet,
    //       },
    //       {
    //         association: ExerciseExerciseData,
    //       }
    //     ]
    //     }]
    //   })
    //     .then((exercices: Array<Training>) => res.status(201).json(exercices))
    //     .catch((err: Error) => res.status(500).json(err));
    // } else {
      console.log("body", req.body);
      const params = req.body;
      Training.create<Training>(params,{
        include: [{
          association: TrainingExercise,
          include: [{
            association: ExerciseExerciseSet,
          },
          {
            association: ExerciseExerciseData,
          }
        ]
        }]
      })
        .then((exercice: Training) => res.status(201).json(exercice))
        .catch((err: Error) => res.status(500).json(err));
    // }
  }

  /// SHOW
  public show(req: Request, res: Response) {
    const exerciseId: number = Number(req.params.id);

    Training.findByPk<Training>(exerciseId,{
      include: [
        {
        association: TrainingExercise,
        include: [{
          association: ExerciseExerciseSet,
        },
        {
          association: ExerciseExerciseData,
        }
      ]
      }, 
      {
        association: TrainingTrainingData,

        include: [
          {
            association: TrainingExercise,
            include: [{
              association: ExerciseExerciseSet,
            },
            {
              association: ExerciseExerciseData,
            }
          ]
          }, 
        ]
      }
    ]
    })
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
    const params: TrainingAttributes = req.body;

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