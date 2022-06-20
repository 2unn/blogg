import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addNewAuthor } from "../../lib/mutation";
import { getAuthors } from "../../lib/queries";

const Resigster = () => {
  const router = useRouter();
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...registerInfo,
      ["name"]: e.target.value,
    });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(registerInfo.name.length <= 6 && registerInfo.name.length <= 6){
      alert("Name and PassWord need to longer than 6 characters")
    }else{
      addAuthor({
        variables: { name: registerInfo.name },
        refetchQueries: [{ query: getAuthors }],
      });
      router.push("WriteNewPosts");
    }
  };

  const [addAuthor, dataMutation] = useMutation(addNewAuthor);

  return (
    <Layout>
      <h1>Be a Writer now!</h1>
      <Form
        onSubmit={handleSubmit}
        className="p-4 border border-3 border-secondary"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            placeholder="Enter user's name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};

export default Resigster;
