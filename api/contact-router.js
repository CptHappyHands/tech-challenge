const express = require("express");
const Contact = require("./contact-model");

const router = express.Router();

//return an array with all people who have submitted a contact
router.get("/", (req, res, next) => {
  Contact.get()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/contacts", (req, res, next) => {
  const contactInfo = req.body;

  Contact.add(contactInfo)
    .then((con) => {
      res.status(201).json({ con });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

router.post;

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: "Well that wasn't fun, was it?",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
