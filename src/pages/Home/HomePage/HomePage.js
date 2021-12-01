import React from 'react';
import './HomePage.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { ArrowDownSquareFill, ChatDotsFill, NodeMinus } from 'react-bootstrap-icons';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Achivements from '../Achivements/Achivements';
import prosenjitimg from '../../../img/PC_white-removebg-preview.png'

const HomePage = () => {
    return (
        <div id="home" className="top-padding">
            <Container >
                <Row className="d-flex align-items-center flex-row">
                    <Col lg="6" md="12" sm="12" className="bg-light">
                        <div className="mt-5">
                            <div>
                                <h1 className="title-name">Hello,<br class="text-black" />I'am <span>Prosenjit</span></h1>
                                <h4 style={{ color: '#D6C64C' }}>Web Developer</h4>
                                <div>
                                    <a target="blank" href="https://drive.google.com/file/d/16dVEf53tR4sEGtPl4C6AccyLyshWPVuQ/view?usp=sharing"><Button varient="light" className="me-3 mt-2 fs-5" style={{ backgroundColor: '#D5C455', border: 'none', padding: '5px 25px', color: 'white', fontWeight: 'large' }}>  <ArrowDownSquareFill /> Resume</Button> </a>
                                    <a href="#contact"><Button varient="light" className="me-3 mt-2 fs-5" style={{ backgroundColor: '#FFE4C4', border: 'none', padding: '6px 25px', color: 'black', fontWeight: 'large' }}> <ChatDotsFill /> Contact Me</Button> </a>
                                </div>
                                <div className="mt-5 me-4 mb-lg-0 mb-4">
                                    <a target="bank" href="https://www.facebook.com/prosenjit.chowdhury.988/" alt="facebook"><img className="social-media" src="https://fastdub.com/wp-content/uploads/2021/07/Facebook-APK-New-Update-2021-free-download.jpg" alt="facebook" /> </a>
                                    <a target="bank" href="https://twitter.com/rsch97" alt="twitter"> <img className="social-media" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyZOzUZc6Nbea-QuCDeoL1tP9HkNG8XQ_hj-7RnfzqMboo3i5FuDYvQUkA7wq8fcyJBA&usqp=CAU" alt="twitter" /></a>
                                    <a target="bank" href="https://www.linkedin.com/in/prosenjit-chowdhury-4968b1195/" alt="linkdin"> <img className="social-media" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkdin" /> </a>
                                    <a target="bank" href="https://github.com/prosenjit-chd?tab=repositories" alt="github"> <img className="social-media" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU" alt="github" />  </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12" style={{ backgroundColor: '#D6C64C' }}>
                        <div className="text-center">
                            <img className="profile-picture-edit img-fluid" src={prosenjitimg} alt="prosenjt" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <About></About>
            <Education> </Education>
            <Skills> </Skills>
            <Projects></Projects>
            <Achivements> </Achivements>
            <Contact> </Contact>
        </div>
    );
};

export default HomePage;