import { Fragment } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface ILayOut {
  children: React.ReactNode;
}

const Layout: React.FC<ILayOut> = ({ children }) => {
  return (
    <Fragment>
      <Navbar expand="xxl" bg="primary" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>BlogVi</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link href="/WriteNewPosts" passHref>
              <Nav.Link>Write your Posts!</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container>{children}</Container>
      <br />
      <br />
    </Fragment>
  );
};

export default Layout;
