import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';



export default class NavigationBar extends Component {
  uploadVideo(){
    window.cloudinary.openUploadWidget({
      cloudName: 'ninhnguyen375',
      tags: ['mini-netflix'],
      uploadPreset: 'xavnsizn'
    }, (error, result) => {
      
      console.log(error, result)
    });
  }
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <img alt="nothing" src="netflix-logo.png" width="120" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="mr-3 ml-3">All Videos</Nav.Link>
              {
                (true) ?
                    <Nav.Link onClick={ this.uploadVideo }>Upload</Nav.Link>
                  : ""
              }
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            {
              (true) 
                ? <Button>Logout</Button> 
                : <Button>Login</Button> 
            }
          </Navbar.Collapse>
        </Navbar>

    )
  }
}
