import React from 'react';
import './Skills.css';
import { Container } from 'react-bootstrap';
import { FileCodeFill } from 'react-bootstrap-icons';

const Skills = () => {
    return (
        <Container id="skills" style={{ paddingTop: "8%" }}>

            <div>
                <div class="tutorial-section">
                    <div class="tittle text-center mb-3">
                        <h3 class="title-color">Skills</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="skill-main card card-body shadow">
                                <i class="fas fa-laptop-code text-center p-2 fa-4x"></i>
                                <div class="">
                                    <h4 class="skill-title card-title p-2">Skills</h4>
                                    <p class="card-text">HTML</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "85%" }} ></div>
                                    </div>
                                    <p class="card-text">CSS</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                    </div>
                                    <p class="card-text">JAVASCRIPT</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                    </div>
                                    <p class="card-text">BOOTSTRAP</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "90%" }}></div>
                                    </div>
                                    <p class="card-text">REACT</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "85%" }} ></div>
                                    </div>
                                    <p class="card-text">NODE</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "75%" }}></div>
                                    </div>
                                    <p class="card-text">DJANGO</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "70%" }}></div>
                                    </div>
                                    <p class="card-text">c</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "70%" }}></div>
                                    </div>
                                    <p class="card-text">GITHUB</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="skill-main card shadow card-body">
                                <i class="fas fa-award p-2 fa-4x text-center"></i>
                                <div class="">
                                    <h4 class="skill-title card-title p-2">Professional Training</h4>
                                    <ol>
                                        <li>
                                            <strong>Complete Web Development</strong> <br />February, 2022 <br />
                                            Organizer: Programming Hero <br /> Programming Hero Community <br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://web.programming-hero.com"> Details </a>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>Symposium on Emerging Technologies</strong> <br />November, 2018 <br />
                                            Organizer: DIA <br /> Daffodil International University <br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://thedailynewnation.com/news/197702/symposium-on-emerging-technologies.html" alt="sd">
                                                Details </a>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>Cyber Security</strong> <br />January, 2020 <br />
                                            Arrenged by Shoriful Islam <br /> Daffodil International University <br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://daffodilvarsity.edu.bd/"> Details </a>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>International Foundation Year</strong> <br />June, 2017 <br />
                                            Organizer: NCC <br /> Daffodil International Academy <br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://daffodilvarsity.edu.bd/"> Details </a>
                                        </li>
                                        <li>
                                            <strong>Employability 360</strong> <br />April, 2020<br />
                                            Organizer: DIU <br />Carrer Development Center<br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://daffodilvarsity.edu.bd/"> Details </a>
                                        </li>
                                        <li>
                                            <strong>Agile Development</strong> <br />November, 2019<br />
                                            Organizer: DIA <br />Ahmed Zafor Sadeq Bhuiyan<br />
                                            <a class="card-link stretched-link" target="_blank"
                                                href="https://daffodilvarsity.edu.bd/"> Details </a>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Skills;