import { DocumentNode, gql } from "@apollo/client";

const getBlogs: DocumentNode = gql`
  query GetBlogs {
    blogs {
      id
      title
      description
      author {
        id
        name
      }
    }
  }
`;

const getSingleBlog: DocumentNode = gql`
  query getSingleBlog($blogId: ID!) {
    blog(id: $blogId) {
      title
      description
      author {
        name
      }
    }
  }
`;

const getAuthors: DocumentNode = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;

export { getBlogs, getSingleBlog, getAuthors };
