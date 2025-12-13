const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../../core/middlewares/ensureAuthenticated");
const clientsService = require("./clients.service");

router.get('/me', ensureAuthenticated, async (req, res) => {
  const user = await clientsService.getById(req.user.id);
  return res.json(user);
});

module.exports = router;