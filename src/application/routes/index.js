const express = require('express');

const router = new express.Router();

const HelloWorldCtrl = new (require('../controllers/user.controller'))();

router
  .route('/users')
  .get(HelloWorldCtrl.getUsers);
router
  .route('/active-users')
  .get(HelloWorldCtrl.getActiveUsers);

module.exports = router;
