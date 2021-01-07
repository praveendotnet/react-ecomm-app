import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand>Demand Cart</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to='/cart'>
                                    <Nav.Link>
                                        <i className="fas fa-shopping-cart"></i>  Cart
                                  </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/login'>
                                    <Nav.Link>Sign In</Nav.Link>
                                </LinkContainer>

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
