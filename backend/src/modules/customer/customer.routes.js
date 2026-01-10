const express = require("express");
const router = express.Router();

// Service
const CustomerService = require("./CustomerService");

// Middlewares
const { ensureAuthenticated, roleValidator } = require('@middlewares');

router.use(ensureAuthenticated);

// [ GET ]
// Retorna todos os clientes ativos
router.get("/customers", roleValidator('STAFF', 'ADMIN'), async (req, res) => {
  const customers = await CustomerService.getAllActiveCustomers();
  return res.status(201).json(customers);
});

router.post("/", async (req, res) => {
  const customerData = req.body;

  const customer = await CustomerService.createCustomer(customerData);
  return res.status(201).json(customer);
});

module.exports = router;