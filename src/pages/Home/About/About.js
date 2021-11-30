import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';
import './About.css';

const About = () => {
    return (
        <Container style={{ paddingTop: "15%" }}>
            <div id="about" class="about">

                <div class="jumbotron pt-4">
                    <div class="text-center mb-3">
                        <h3 class="">About Me</h3>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 text-center mt-2">
                            <img class="rounded img-fluid px-4" height="450" src="https://pbs.twimg.com/media/FFYT5XzVIAAc7sV?format=jpg&name=large" alt="" />
                        </div>

                        <div class="col-lg-6">
                            <div>
                                <p>
                                    Hello, <br />I completed my graduation from the <strong>Daffodil International
                                        University</strong> with a <strong>Bachelor of Computing and Information
                                            System.</strong>
                                    I have hands-on professionalism in designing software applications that meet the
                                    technical requirements and functionality of the clients.
                                    I can also make configuration changes, write codes to match the functions specified
                                    by the senior programmer and execute tests to ensure functionality.
                                    I have the ability to work under pressure and meet tight deadlines while maintaining
                                    a friendly and positive attitude.
                                </p>
                                <hr />
                                <p>
                                    <b>Name: </b> Prosenjit Chowdhury
                                </p>
                                <hr />
                                <p>
                                    <b>Degree: </b> BSc in Computing & Information System
                                </p>
                                <hr />
                                <p>
                                    <b>Gender: </b> Male
                                </p>
                                <hr />
                                <p>
                                    <b>Nationality: </b> Bangladeshi
                                </p>
                                <hr />
                            </div>


                            <div class="btn-group">
                                <Button varient="light" className="mt-2" > <ChatDotsFill /> Contact Me</Button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </Container>
    );
};

export default About;