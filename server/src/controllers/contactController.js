const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");

// @desc    Send contact form
// @route   POST /api/contact
// @access  Public
exports.sendContactForm = asyncHandler(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new ErrorResponse("Please provide all fields", 400));
  }

  try {
    await sendEmail({
      email: process.env.CONTACT_EMAIL,
      subject: "New Contact Form Submission",
      message: `
        <h3>New Contact Form Submission</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h4>Message:</h4>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true, data: "Email sent" });
  } catch (err) {
    console.error(err);
    return next(new ErrorResponse("Email could not be sent", 500));
  }
});
