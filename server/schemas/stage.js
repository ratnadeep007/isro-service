// @ts-nocheck
const mongoose = require('mongoose');

var StageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  launcherId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'Launchers'
  },
  description: {
    type: String,
  },
  engine: String,
  fuel: String,
  maxThrust: Number,
  burnTime: Number,
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

StageSchema.pre('save', function() {
  this.metadata.createdOn = new Date();
});

StageSchema.pre('update', function() {
  this.metadata.modifiedOn = new Date();
});

let Stage = mongoose.model('Stages', StageSchema);

module.exports = Stage;