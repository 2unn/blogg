

const Author = require("../models/author");
const Blog = require("../models/blog");

const resolvers = {
  // Query
  Query: {
    blogs: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBlogs(),

    blog: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getBlogById(args.id),

    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),

    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(args.id),
  },
  Blog: {
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(parent.authorId),
  },
  Author: {
    blogs: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBlogs(parent.id),
  },

  //Mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBlog: async (parent, args, { mongoDataMethods }) =>
      mongoDataMethods.createBlog(args),
  },
};

module.exports = resolvers;
