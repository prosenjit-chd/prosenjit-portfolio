import React, { useEffect, useState } from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "#00095E",
        borderBottom: "solid 2px #00095E"
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className={scrolled ? "shadow py-3" : "py-3"}>
                <Container fluid>
                    <Navbar.Brand style={{ cursor: 'pointer' }} className="d-flex align-items-center fs-3 primary-color">
                        <span className="fw-bold name-font">Prosenjit Ch</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{ fontSize: 18 }}>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/bikes">About</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/aboutus">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 100 }}>

            </div>
        </>
    );
};

export default Header;
