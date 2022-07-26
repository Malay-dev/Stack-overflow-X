import questions from "../models/questions.js";
import mongoose from "mongoose";

export const postComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody, userCommented, userId } = req?.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
  try {
    const updatedQuestion = await questions.findByIdAndUpdate(_id, {
      $addToSet: {
        comment: [{ commentBody, userCommented, userId: userId }],
      },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
