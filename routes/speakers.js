const express = require("express");

const router = express.Router();

module.exports = () => {
  //will match /speakers
  router.get("/", (req, res) => {
    return res.send("Speakers List");
  });

  router.get("/:shortname", (req, res) => {
    return res.send(`Detail page of ${req.params.shortname}`);
  });

  return router;
};
