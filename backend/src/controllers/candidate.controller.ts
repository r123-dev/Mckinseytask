import { Request, Response } from "express";
import Candidate from "../models/candidate.model";

export const getAllCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createCandidate = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const candidate = new Candidate({ name, email });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCandidate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const candidate = await Candidate.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const softDeleteCandidate = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
