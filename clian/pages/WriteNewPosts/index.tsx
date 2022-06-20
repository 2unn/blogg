import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../../layout";
import Link from "next/link";
import { getBlogs, getAuthors } from "../../lib/queries";
import { addNewBlog } from "../../lib/mutation";

const WriteNewPosts = () => {
  //router
  const router = useRouter();
  //Set input value
  const [postsInputValue, setPostsInputValue] = useState<{
    title: String;
    description: String;
  }>({
    title: "",
    description: "",
  });

  const [author, setAuthor] = useState("");

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostsInputValue({
      ...postsInputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== null && e.target.value.trim() !== "") {
      setAuthor(e.target.value);
    } else {
      alert("Choose the author");
    }
  };
  //Handle Submit
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      postsInputValue.title.length <= 6 &&
      postsInputValue.description.length <= 6 &&
      author.length <= 6
    ) {
      alert("Your value is not valid");
    } else {
      addBlog({
        variables: {
          title: postsInputValue.title,
          description: postsInputValue.description,
          authorId: author,
        },
        refetchQueries: [{ query: getBlogs }, { query: getAuthors }],
      });
      router.push("/");
    }
  };

  //Mutation
  const [addBlog, dataMutation] = useMutation(addNewBlog);

  //Query authors
  const { loading, error, data } = useQuery(getAuthors);
  if (loading) return <div>wait</div>;

  //Mutation blogs
  return (
    <Layout>
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleOnInputChange}
              name="title"
              type="text"
              placeholder="Write the title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Posts</Form.Label>
            <Form.Control
              onChange={handleOnInputChange}
              name="description"
              as="textarea"
              rows={8}
            />
          </Form.Group>
          <Form.Label>Who are you?</Form.Label>
          <Form.Select
            value={author}
            onChange={handleOnSelectChange}
            name="description"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            {data.authors.map((author: any) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Select>
          <Form.Text>If you not a Writer </Form.Text>

          <Link href="/Register">
            <a style={{ color: "#4c40e5" }}>Click this</a>
          </Link>

          <Form.Group
            className=" d-grid mt-3"
            controlId="exampleForm.ControlInput1"
          ></Form.Group>
          <Button size="lg" variant="success" type="submit">
            Post
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default WriteNewPosts;
