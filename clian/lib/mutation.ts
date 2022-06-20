import { gql } from "@apollo/client";

const addNewBlog = gql`
  mutation CreateBlog($title: String, $description: String, $authorId: ID!) {
    createBlog(title: $title, description: $description, authorId: $authorId) {
      id
      title
      description
    }
  }
`;

const addNewAuthor = gql`
  mutation CreateAuthor($name: String) {
    createAuthor(name: $name) {
      id
      name
    }
  }
`;
export { addNewBlog, addNewAuthor };
