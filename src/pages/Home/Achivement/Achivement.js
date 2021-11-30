import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Calendar2DateFill } from 'react-bootstrap-icons';

const Achivement = (props) => {
    // use distructure here 
    const { id, title, date, authority, img } = props.achivementprop;
    return (
        <div>
            <Col>
                <Card className="h-100 bg-light p-2 border-1 shadow">
                    <Card.Img variant="top" src={img} className="home-card-img img-fluid" />
                    <Card.Body>
                        <Card.Title className="card-title" style={{ color: "blue", fontSize: "20px", fontWeight: "bolder" }}>{title}</Card.Title>
                        <Card.Text className="text-dark">
                            {authority}
                        </Card.Text>
                        <div className="card-details">
                            <Calendar2DateFill /> {date}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Achivement;