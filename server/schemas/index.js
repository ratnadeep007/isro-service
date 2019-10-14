const mongoose = require('mongoose');
const Launch = require('./launch');
const Launcher = require('./launcher');

module.exports = {
  launch: Launch,
  launcher: Launcher
}