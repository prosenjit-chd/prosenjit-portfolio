import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Achivement from '../Achivement/Achivement';
import './Achivements.css';

const Achivements = () => {
    // Use USe State here 
    const [achivements, setAchivements] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('./achivements.json')
            .then(res => res.json())
            .then(data => setAchivements(data))
    }, []);

    return (
        <Container style={{ paddingTop: "8%" }} id="achivements">
            <h2 style={{ color: "#e6520e" }}>Achivements </h2>
            <Row xs={1} md={2} lg={3} className="g-5 mb-4">
                {
                    achivements.map(a => <Achivement key={a.id} achivementprop={a} />)
                }
            </Row>
        </Container>
    );
};

export default Achivements;