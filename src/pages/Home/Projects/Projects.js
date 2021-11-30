import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    // Use USe State here 
    const [project, setProject] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);

    return (
        <Container style={{ paddingTop: "8%" }}  id="projects">
            <h2 style={{ color: "#e6520e" }}>Let's Explore My Projects </h2>
            <Row xs={1} md={2} lg={3} className="g-5 mb-4">
                {
                    project.map(p => <Project key={p.id} projectprop={p} />)
                }
            </Row>
        </Container>
    );
};

export default Projects;