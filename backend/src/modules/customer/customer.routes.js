const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../../core/middlewares/ensureAuthenticated");
const customerService = require("./customer.service");

router.get('/me', ensureAuthenticated, async (req, res) => {
  const user = await customerService.getById(req.user.id);
  return res.json(user);
});

module.exports = router;