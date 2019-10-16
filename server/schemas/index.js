const mongoose = require('mongoose');
const Launch = require('./launch');
const Launcher = require('./launcher');
const Stage = require('./stage');

module.exports = {
  launch: Launch,
  launcher: Launcher,
  stage: Stage
}