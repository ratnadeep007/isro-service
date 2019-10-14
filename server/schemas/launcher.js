// @ts-nocheck
const mongoose = require('mongoose');
const Launch = require('./launch');

var LauncherSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  shortDescription: {
    type: String
  },
  longDescription: {
    type: String
  },
  launches: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Launches'
  }],
  metadata: {
    createdOn: {
      type: Date,
      require: true
    },
    modifiedOn: {
      type: Date,
      require: true
    }
  }
});

LauncherSchema.pre('save', function() {
  this.metadata.createdOn = new Date();
});

LauncherSchema.pre('update', function() {
  this.metadata.modifiedOn = new Date();
});

let Launcher = mongoose.model('Launchers', LauncherSchema);

module.exports = Launcher;