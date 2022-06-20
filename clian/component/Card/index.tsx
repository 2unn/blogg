import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import { IHome as DataType } from "../../pages";

const CardList: React.FC<DataType> = ({ data }) => {
  const router = useRouter();
  const handleOnClick = (val: String) => {
    router.push(`${val}`);
  };
  return (
    <Fragment>
      <Container>
        <Row className="row-cols-1 row-cols-md-3 g-4 j">
          {data.map((post, id) => {
            let src: string;
            if (post.author.name === "Vietcetera") {
              src = "/vietcetera.webp";
            } else if (post.author.name === "VTV News") {
              src = "/vtv.png";
            } else if (post.author.name === "Nguyen Quan") {
              src = "/meo.webp";
            } else {
              src = "/newCat.avif";
            }
            return (
              <Col key={id} xs={3} className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={src} height="286px" />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{post.title}</Card.Title>

                    <div>
                      <Card.Text>Writer: {post.author.name}</Card.Text>
                      <Button
                        onClick={() => handleOnClick(post.id)}
                        variant="dark"
                      >
                        Check it out!
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardList;
