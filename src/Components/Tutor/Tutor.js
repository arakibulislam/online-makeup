import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Tutor = (props) => {
    const { img, name, email, dg, details } = props.tutor;
    return (
        <Col className='my-4'>
            <Card className='h-100 border-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h4>
                            <b>{name}</b>
                        </h4>
                    </Card.Title>
                    <h5 style={{ color: `#df5c4f` }} className='fw-light'>
                        {dg}
                    </h5>
                    <p className ='text-muted'>
                        {details}
                    </p>

                </Card.Body>
                <Button variant="outline-dark" > {email}</Button>
            </Card>
        </Col>
    );
};

export default Tutor;