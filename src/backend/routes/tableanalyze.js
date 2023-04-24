// Import express & router
const express = require('express');
const router = express.Router();

// Import controllers
const colController = require('../controllers/column');
const tabController = require('../controllers/table');

// Tab routes
router.get(`${process.env.ROOT}tab`, tabController.getAllTab);
router.put(`${process.env.ROOT}tab/:id`, tabController.updateTab);
router.post(`${process.env.ROOT}tab`, tabController.getFromSearch);
// Col routes
router.get(`${process.env.ROOT}col/:id`, colController.getColsOfTab);
router.put(`${process.env.ROOT}col/:id`, colController.updateCol);

// Export router
module.exports = router;
