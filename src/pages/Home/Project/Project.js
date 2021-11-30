import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { CheckCircleFill, JournalCode } from 'react-bootstrap-icons';
import './Project.css';


const Project = (props) => {
    // use distructure here 
    const { id, title, duration, technology, coverimg } = props.projectprop;

    // use use History function 
    const history = useHistory();

    // use handaler 
    const handleDetailView = () => {
        history.push(`/project/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className="h-100 bg-light p-2 shadow-sm border-0">
                    <Card.Img variant="top" src={coverimg} className="card-img img-fluid" />
                    <Card.Body>
                        <Card.Title className="card-title" style={{ color: "#e6520e" }}>{title}</Card.Title>
                        <Card.Text className="cart-text">
                            <b className="text-primary">Date: </b>{duration}
                        </Card.Text>
                        <Card.Text className="text-dark">
                            {/* {deatails.slice(0, 100)} */}
                        </Card.Text>
                        <div className="card-details">
                            <JournalCode /> Technology: <b>{technology} </b>
                        </div>
                        <Button
                            // Workable button this is
                            className="mt-2"
                            variant="info"
                            onClick={handleDetailView}
                        ><CheckCircleFill /> Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;