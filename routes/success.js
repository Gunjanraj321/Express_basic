const express = require('express');

const successController = require('../controllers/success')

const router = express.Router();

router.post('/',successController.getSuccess)

module.exports =  router;