import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => findProject(data))
    }, []);

    const findProject = (data) => {
        // find single service
        setProject(data.find(s => s.id === parseInt(id)));
    }

    return (
        <Container style={{ minHeight: '80vh', marginTop: '90px' }}>
            <Row className="mt-5">
                <Col lg="6" className="shadow border-1 p-4">
                    <h4><b>Project Title:</b> <span className="text-primary">{project.title}</span></h4>
                    <div>
                        <h4><b>Descriptions:</b></h4>
                        <ul>
                            {
                                project?.details?.map((d, i) => (
                                    <li>{d}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4><b>Technology: </b></h4>
                        {
                            project?.technology
                        }
                    </div>
                    <div>
                        <h4><b>Links: </b></h4>
                        {project?.link?.livesite ? <a className="me-3" href={project?.link?.livesite} target="_blank">Live Site</a> : ''}
                        {project?.link?.client ? <a className="me-3" href={project?.link?.client} target="_blank">Github Client</a> : ''}
                        {project?.link?.server ? <a className="me-3" href={project?.link?.server} target="_blank">Github Server</a> : ''}
                    </div>
                </Col>
                <Col lg="6">
                    <div className="project-cover">
                        <img src={project.coverimg} className="img-fluid" alt="" />
                    </div>
                </Col>
            </Row>
            <div className="mt-5">
                <h4 className="text-center text-primary"><b>More Screenshots </b></h4>
                {
                    <Row xs={1} md={1} className="g-4">
                        {project?.imgsrc?.map((s, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={s} className="img-fluid border border-0" />
                                    {/* <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                            </Card.Body> */}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </div>
        </Container>
    );
};

export default ProjectDetails;