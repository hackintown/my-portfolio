const Contact = require("../models/contactModel");

// Controller for handling contact form submissions
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Validation Error",
        message: "Name and email are required fields",
      });
    }
    // Create a new contact document
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact document to the database
    await contact.save();
    console.log("Contact saved successfully");

    // Send a success response
    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error creating contact:", error.message);
    // Handle any errors that occur
    res.status(500).json({
      success: false,
      error: "Server Error",
      message: error.message,
    });
  }
};
