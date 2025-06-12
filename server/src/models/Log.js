import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    time: String,
    location: String,
    event: String,
  },
  { timestamps: true }
);

export default mongoose.model("Log", logSchema);
