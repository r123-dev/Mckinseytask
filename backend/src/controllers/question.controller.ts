import { Request, Response } from "express";
import Question from "../models/question.model";

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find().sort({ updatedAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  const { text, options, correctOption, marks, negativeMarking, tags } =
    req.body;

  try {
    const question = new Question({
      text,
      options,
      correctOption,
      marks,
      negativeMarking,
      tags,
    });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text, options, correctOption, marks, negativeMarking, tags } =
    req.body;

  try {
    const question = await Question.findByIdAndUpdate(
      id,
      { text, options, correctOption, marks, negativeMarking, tags },
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const question = await Question.findByIdAndDelete(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
