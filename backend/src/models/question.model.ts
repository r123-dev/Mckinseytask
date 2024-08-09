import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctOption: { type: Number, required: true },
    marks: { type: Number, required: true },
    negativeMarking: { type: Number, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

QuestionSchema.index({ text: "text", tags: 1 });

export default mongoose.model("Question", QuestionSchema);
