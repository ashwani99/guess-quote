const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

// Question Schema
const QuestionSchema = mongoose.Schema({
  title: {
    type: String,
    default: null
  },
  options: [
    {
      value: {
        type: String,
        default: null
      },
      is_correct: {
        type: Boolean,
        default: false
      }
    }
  ],
  is_deleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
QuestionSchema.plugin(random);

// Question Model
const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
