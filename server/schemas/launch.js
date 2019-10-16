// @ts-nocheck
const mongoose = require('mongoose');

var LaunchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  launchDate: {
    type: Date,
    required: true,
  },
  type: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  payload: {
    type: String,
    required: true,
  },
  successful: {
    type: Boolean
  },
  remark: {
    type: String
  },
  description: {
    type: String
  },
  launcherType: String,
  orbit: String,
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

LaunchSchema.pre('save', function() {
  this.metadata.createdOn = new Date();
});

LaunchSchema.pre('update', function() {
  this.metadata.modifiedOn = new Date();
});

let Launch = mongoose.model('Launches', LaunchSchema);

module.exports = Launch;