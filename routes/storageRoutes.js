const express = require('express');
const storageController = require('../controllers/storageController');

const router = express.Router();

router.post('/set-cookie', storageController.setCookie);
router.get('/get-cookie/:name', storageController.getCookie);

module.exports = router;
