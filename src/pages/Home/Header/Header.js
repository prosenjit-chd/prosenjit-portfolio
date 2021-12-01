import React, { useEffect, useState } from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "blue",
        borderBottom: "solid 2px blue"
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
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{ fontSize: 15 }}>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#education">Education</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#skills">Skills</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#projects">Projects</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#achivements">Achivements</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#contact">Contact</Nav.Link>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/blogs">Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div style={{ marginTop: 100 }}>

            </div> */}
        </>
    );
};

export default Header;
