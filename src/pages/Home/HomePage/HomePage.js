import React from 'react';
import './HomePage.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { ArrowDownSquareFill, ChatDotsFill } from 'react-bootstrap-icons';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Achivements from '../Achivements/Achivements';

const HomePage = () => {
    return (
        <div id="home" style={{ paddingTop: "7%" }}>
            <Container >
                <Row className="d-flex align-items-center flex-row">
                    <Col lg="6" md="12" sm="12">
                        <div className="">
                            <div>
                                <h1 className="title-name">Hello,<br class="text-black" />I'am <span class="home-myname">Prosenjit</span></h1>
                                <h4>Web Developer</h4>
                                <div>
                                    <a target="blank" href="https://drive.google.com/file/d/1LIeiMi8n_W-5ji8mXcMkIvMjCdFGtMA4/view"><Button varient="primary" className="me-3 mt-2"> <ArrowDownSquareFill /> Resume</Button> </a>
                                    <a href="#contact"><Button varient="light" className="mt-2" > <ChatDotsFill /> Contact Me</Button> </a>
                                </div>
                                <div className="mt-5 me-4">
                                    <a target="bank" href="https://www.facebook.com/prosenjit.chowdhury.988/" alt="facebook"><img className="social-media" src="https://fastdub.com/wp-content/uploads/2021/07/Facebook-APK-New-Update-2021-free-download.jpg" alt="facebook" /> </a>
                                    <a target="bank" href="https://twitter.com/rsch97" alt="twitter"> <img className="social-media" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyZOzUZc6Nbea-QuCDeoL1tP9HkNG8XQ_hj-7RnfzqMboo3i5FuDYvQUkA7wq8fcyJBA&usqp=CAU" alt="twitter" /></a>
                                    <a target="bank" href="https://www.linkedin.com/in/prosenjit-chowdhury-4968b1195/" alt="linkdin"> <img className="social-media" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkdin" /> </a>
                                    <a target="bank" href="https://github.com/prosenjit-chd?tab=repositories" alt="github"> <img className="social-media" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU" alt="github" />  </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                        <div>
                            <img className="w-100 profile-picture-edit" src="https://pbs.twimg.com/media/FFX_iRxUUAM8li3?format=jpg&name=large" alt="prosenjt" />
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