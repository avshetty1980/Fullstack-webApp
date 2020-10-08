const express = require("express");

const router = express.Router();

module.exports = () => {
  //will match /speakers
  router.get("/", (req, res) => {
    return res.send("Feedback");
  });

  //when client submit form send with post
  router.post("/", (req, res) => {
    return res.send("Feedback form posted");
  });

  return router;
};
