import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

export default function NavB() {
  return (
    <Navbar bg="white" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Meli Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Productos</Nav.Link>
              <Nav.Link href="#action2">Contacto</Nav.Link>
            </Nav>
            <FaCartPlus />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
