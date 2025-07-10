const mongoose = require("mongoose");

const DesignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a design title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    image: {
      type: String,
      required: [true, "Please upload an image URL or path"],
    },
    category: {
      type: String,
      enum: ["UI", "UX", "Branding", "Illustration", "Other"],
      default: "Other",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Design", DesignSchema);
