import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
    const { courseName, courseImg, skill, price, discount } = props.course
    return (
        <Col>
            <Card className="text-center border-0 mx-4 mt-3 hover">
                <Card.Img variant="top" src={courseImg} />
                <h4 className='card-h'>
                {courseName}
                </h4>
                <Card.Body className='pt-0'>
                    <Card.Title className='fs-5 fw-bold' style={{ color: `#df5c4f` }}>{courseName}</Card.Title>
                    <Card.Text className='card-text'>
                        <p>
                           {skill.one}
                        </p>
                        <p>
                       {skill.two}
                        </p>
                        <p>
                        {skill.three}
                        </p>
                        <p>
                        {skill.four}
                        </p>
                    </Card.Text>
                    <Button variant="outline-dark"><b><small>{price} or {discount}</small></b></Button>
                </Card.Body>
                
            </Card>
        </Col>

    );
};

export default Courses;