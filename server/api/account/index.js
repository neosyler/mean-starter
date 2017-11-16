'use strict';

var express = require('express');
var generalController = require('../general/general.controller');
var router = express.Router();

var controller = generalController.init('account', [
  'institutionId', 'description'
]);

router.get('/', controller.list); //list
router.post('/options', controller.list); //list with options
router.post('/', controller.list); //list
router.get('/:id', controller.getItem); //get by id
router.post('/create', controller.create); //creates an item
router.delete('/remove/:id', controller.remove); //removes an item
router.put('/update/:id', controller.updateItem); //updates an item

module.exports = router;
