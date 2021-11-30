import React from 'react';
import { Container } from 'react-bootstrap';
import './Education.css';

const Education = () => {
    return (
        <Container id="education" style={{ paddingTop: "5%" }}>
            <div class="bg-light p-5">
                <h3 class="text-center pb-4 title-color">Education</h3>

                <div class="card edcation-card shadow row">
                    <div class="col-lg-2 col-md-3 col-sm-3 text-center pt-4">
                        <i class="fas fa-5x fa-user-graduate"></i>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 pt-4">
                        <h5 class=""><b>BSc in Computing & Information System (CGPA:3.81/4)</b></h5>
                        <h6 class=""><i class=""></i>Passing Year: 2021</h6>
                        <p>Daffodil International University</p><br />
                    </div>
                </div>

                <div class="card edcation-card shadow row">
                    <div class="col-lg-2 col-md-3 col-sm-3 text-center pt-4">
                        <i class="fas fa-5x fa-university"></i>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 pt-4">
                        <h5 class=""><b>Advance Diploma in Computing (68%, Merit)</b></h5>
                        <h6 class=""><i class=""></i>Passing Year: 2018</h6>
                        <p>National Computing Center(NCC), UK <br /> Degree completed through the British Council </p>
                    </div>
                </div>

                <div class="card edcation-card shadow row">
                    <div class="col-lg-2 col-md-3 col-sm-3 text-center pt-4">
                        <i class="fas fa-4x fa-school"></i>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 pt-4">
                        <h5 class=""><b>Higher Secondary Certificate (Science) (GPA: 4.08/5.00)</b></h5>
                        <h6 class=""><i class=""></i>Passing Year: 2015</h6>
                        <p>Alamdanga College</p><br />
                    </div>
                </div>

                <div class="card edcation-card shadow row">
                    <div class="col-lg-2 col-md-3 col-sm-3 text-center pt-4">
                        <i class="fas fa-4x fa-school"></i>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 pt-4">
                        <h5 class=""><b>Secondary School Certificate (Science) (GPA: 4.94/5.00)</b></h5>
                        <h6 class=""><i class=""></i>Passing Year: 2013</h6>
                        <p>Alamdanga High School</p><br />
                    </div>
                </div>

                <div class="card edcation-video shadow mb-5">
                    <div class="row">
                        <div class="video-section col-lg-4">
                            <div class="video-text">
                                <p>Video Resume</p>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <iframe width="600" height="350" src="https://www.youtube.com/embed/1JpIdUxAg7M">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Education;