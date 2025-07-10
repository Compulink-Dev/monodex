const Design = require("../models/Design");

// @desc    Get all designs
// @route   GET /api/designs
exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: designs });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get single design
// @route   GET /api/designs/:id
exports.getDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) {
      return res
        .status(404)
        .json({ success: false, error: "Design not found" });
    }
    res.status(200).json({ success: true, data: design });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Create new design
// @route   POST /api/designs
exports.createDesign = async (req, res) => {
  try {
    const design = await Design.create(req.body);
    res.status(201).json({ success: true, data: design });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update a design
// @route   PUT /api/designs/:id
exports.updateDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!design) {
      return res
        .status(404)
        .json({ success: false, error: "Design not found" });
    }
    res.status(200).json({ success: true, data: design });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a design
// @route   DELETE /api/designs/:id
exports.deleteDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndDelete(req.params.id);
    if (!design) {
      return res
        .status(404)
        .json({ success: false, error: "Design not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
