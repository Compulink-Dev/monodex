const express = require("express");
const {
  getDesigns,
  getDesign,
  createDesign,
  updateDesign,
  deleteDesign,
} = require("../controllers/designController");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getDesigns).post(protect, createDesign);

router
  .route("/:id")
  .get(getDesign)
  .put(protect, updateDesign)
  .delete(protect, deleteDesign);

module.exports = router;
