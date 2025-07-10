const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  tags: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    default: "no-photo.jpg",
  },
  githubUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  designProcess: {
    type: String,
  },
  challenges: {
    type: String,
  },
  solution: {
    type: String,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
