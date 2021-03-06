import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Link href="/">
            <a>
              <Navbar.Brand>
                <img
                  alt=""
                  src="/favicon.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                EthShop
              </Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Navbar.Text>
              Signed in as: <a href="#login">Person</a>
            </Navbar.Text>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
