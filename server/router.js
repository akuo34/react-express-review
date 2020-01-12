const controller = require('./controller');
// var express = require('express');
// var router = express.Router();
const router = require('express').Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  .route('/:indx') //colon is a placeholder for localhost:3000/api
  .delete(controller.delete)

module.exports = router;