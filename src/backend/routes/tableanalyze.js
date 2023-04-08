// Import express & router
const express = require('express');
const router = express.Router();

// Import controllers
const colController = require('../controllers/column');
const tabController = require('../controllers/table');

// Tab routes
router.get('/tab', tabController.getAllTab);
router.put('/tab/:id', tabController.updateTab);
router.post('/tab', tabController.getFromSearch);
// Col routes
router.get('/col/:id', colController.getColsOfTab);
router.put('/col/:id', colController.updateCol);

// Export router
module.exports = router;
