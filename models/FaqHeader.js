const mongoose = require('mongoose');

const FaqHeaderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Frequently Asked Questions",
    },
    bgImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=1600&q=80",
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

module.exports = mongoose.model('FaqHeader', FaqHeaderSchema);
