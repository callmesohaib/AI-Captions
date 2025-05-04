const Contact = require("../models/contactModel");

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
    });
    if (!newContact) {
      return res.status(400).json({
        success: false,
        message: "Contact submission failed",
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: newContact,
      });
    }
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports= submitContact
