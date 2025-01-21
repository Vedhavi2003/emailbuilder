const mongoose = require('mongoose');

const EmailTemplateSchema = new mongoose.Schema({
  title: String,
  content: String,
  footer: String,
  imageUris: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EmailTemplate', EmailTemplateSchema);

