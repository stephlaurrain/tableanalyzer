// Import express & router
const express = require('express');
const router = express.Router();

// Import controllers
const colController = require('../controllers/column');
const tabController = require('../controllers/table');

// Col routes
router.get('/col', colController.getAllCol);
router.put('/col/:id', colController.createCol);

// Tab routes
router.get('/tab', tabController.getAllTab);
router.put('/tab/:id', tabController.createTab);
/*
router.get('/:id', auth, saucesController.getASauce);
router.post('/', auth, multer, saucesController.createSauce);
router.put('/:id', auth, multer, saucesController.editSauce);
router.delete('/:id', auth, saucesController.deleteSauce);
router.post('/:id/like', auth, saucesController.likeSauce);
*/

// Export router
module.exports = router;
