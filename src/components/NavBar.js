import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/todoapp">TodoApp</Nav.Link>

      {/*original react router dom*/}
      <Link to="">Home</Link>{` `}
      <Link to="todoapp">TodoApp</Link>
      <Link to="data_wonderlink">Data Wonderlink</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbar1