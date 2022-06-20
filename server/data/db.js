const Blog = require("../models/blog");
const Author = require("../models/author");

const mongoDataMethods = {
  getAllBlogs: async (condition = null) =>
    condition === null ? await Blog.find() : await Blog.find(condition),
  getAllAuthors: async () => await Author.find(),
  getBlogById: async (id) => await Blog.findById(id),
  getAuthorById: async (id) => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBlog: async (args) => {
    const newBlog = new Blog(args);
    return newBlog.save();
  },
};

module.exports = mongoDataMethods;
