const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
    authors: [Author]
    author(id: ID!): Author
  }

  type Blog {
    id: ID
    title: String
    description: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    blogs: [Blog]
  }

  type Mutation {
    createAuthor(name: String): Author
    createBlog(
      title: String
      description: String
      authorId: ID!
    ): Blog
  }
`;
module.exports = typeDefs;
