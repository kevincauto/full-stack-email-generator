const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmailSchema = new Schema({
  fileName: {
    type: String,
    index: true
  },
  state: Schema.Types.Mixed,
  lastUpdated: String
});

module.exports = mongoose.model('Email', EmailSchema);