const mongoose = require('mongoose');

const ContactSectionSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true, // e.g. "contact-hero", "contact-intro", "contact-map"
    },
    name: {
      type: String,
      required: true, // Human-readable name
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    metaViewTitle: {
      type: String,
      trim: true,
    },
    metaKeywords: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactSection', ContactSectionSchema);
