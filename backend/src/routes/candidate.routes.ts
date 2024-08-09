import express from "express";
import {
  getAllCandidates,
  createCandidate,
  updateCandidate,
  softDeleteCandidate,
} from "../controllers/candidate.controller";

const router = express.Router();

router.get("/", getAllCandidates);
router.post("/", createCandidate);
router.put("/:id", updateCandidate);
router.delete("/:id", softDeleteCandidate);

export default router;
