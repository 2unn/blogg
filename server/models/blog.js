const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

module.exports = mongoose.model("blog", BlogSchema);
