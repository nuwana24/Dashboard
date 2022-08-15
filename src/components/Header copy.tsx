import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../css/components.css"
import UserPicture from "../img/user.jpg"


interface Props {

}
interface State {

}

export default class Header extends Component<Props, State>{
    state = {

    }

    render() {
        return (
            <div className='white'>
                <Navbar id='nav-bar' bg="light " variant="light">
                    <Container>
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link id='Nav-font' href="/">Overview</Nav.Link>
                            <Nav.Link id='Nav-font' className="active" href="/organization">Organizations</Nav.Link>
                            <Nav.Link id='Nav-font' href="/user">Users</Nav.Link>
                            {/* <Nav.Link href="#"><Link to="/">Users</Link></Nav.Link> */}
                        </Nav>
                        <div className=" profile-detail">
                            <Row id='row1'>
                                <Col id='col2' >
                                    <h5>Leo Blair</h5>
                                </Col>
                                <Col >
                                    <img
                                        src={UserPicture}
                                        alt=""
                                        height={"50px"}
                                        style ={{borderRadius:"50px"}}
                                    />
                                </Col>
                            </Row>


                        </div>

                        {/* <Nav className="ms-auto">
                            <Nav.Link href="/other">Overview</Nav.Link>
                            
                            <Nav.Link href="/organization">Organizations</Nav.Link> */}
                        {/* <Nav.Link href="/user">Users</Nav.Link> */}
                        {/* <Nav.Link href="#"><Link to="/">Users</Link></Nav.Link> */}
                        {/* </Nav> */}
                    </Container>
                </Navbar>

            </div>
        )

    }
}