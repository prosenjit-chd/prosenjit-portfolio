import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CameraReelsFill } from 'react-bootstrap-icons';
import './Education.css';

const Education = () => {
    return (
        <Container id="education" style={{ paddingTop: "7%" }}>
            <div class="bg-light p-5">
                <h3 class="text-center pb-4 title-color">Education</h3>

                <Row className="border border-1 shadow pt-4 mb-3 text-center rounded-lg">
                    <Col lg="3" md="12" sm="12">
                        <div>
                            <i class="fas fa-5x fa-user-graduate"></i>
                        </div>
                    </Col>
                    <Col lg="9" md="12" sm="12">
                        <div>
                            <h5 class=""><b>BSc in Computing & Information System (CGPA:3.81/4)</b></h5>
                            <h6 class=""><i class=""></i>Passing Year: 2021</h6>
                            <p>Daffodil International University</p><br />
                        </div>
                    </Col>
                </Row>
                <Row className="border border-1 shadow pt-4 mb-3 text-center rounded-lg">
                    <Col lg="3" md="12" sm="12">
                        <div>
                            <i class="fas fa-5x fa-university"></i>
                        </div>
                    </Col>
                    <Col lg="9" md="12" sm="12">
                        <div>
                            <h5 class=""><b>Advance Diploma in Computing (68%, Merit)</b></h5>
                            <h6 class=""><i class=""></i>Passing Year: 2018</h6>
                            <p>National Computing Center(NCC), UK <br /> Degree completed through the British Council </p>
                        </div>
                    </Col>
                </Row>
                <Row className="border border-1 shadow pt-4 mb-3 text-center rounded-lg">
                    <Col lg="3" md="12" sm="12">
                        <div>
                            <i class="fas fa-4x fa-school"></i>
                        </div>
                    </Col>
                    <Col lg="9" md="12" sm="12">
                        <div>
                            <h5 class=""><b>Higher Secondary Certificate (Science) (GPA: 4.08/5.00)</b></h5>
                            <h6 class=""><i class=""></i>Passing Year: 2015</h6>
                            <p>Alamdanga College</p><br />
                        </div>
                    </Col>
                </Row>
                <Row className="border border-1 shadow pt-4 mb-3 text-center rounded-lg">
                    <Col lg="3" md="12" sm="12">
                        <div>
                            <i class="fas fa-4x fa-school"></i>
                        </div>
                    </Col>
                    <Col lg="9" md="12" sm="12">
                        <div>
                            <h5 class=""><b>Secondary School Certificate (Science) (GPA: 4.94/5.00)</b></h5>
                            <h6 class=""><i class=""></i>Passing Year: 2013</h6>
                            <p>Alamdanga High School</p><br />
                        </div>
                    </Col>
                </Row>
                {/* <Row className="border border-1 shadow pt-4 mb-3 text-center rounded-lg">
                    <Col lg="3" md="12" sm="12">
                        <div>
                            <CameraReelsFill className="video"></CameraReelsFill>
                        </div>
                    </Col>
                    <Col lg="9" md="12" sm="12">
                        <div>
                            <iframe  src="https://www.youtube.com/embed/1JpIdUxAg7M">
                            </iframe>
                        </div>
                    </Col>
                </Row> */}
            </div>
        </Container>
    );
};

export default Education;