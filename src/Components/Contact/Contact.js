import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import img from '../../images/contact.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div className='mt-5 pt-5 ' style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: `canter`,
            backgroundSize: `cover`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`

        }}>
            <Container className='d-flex p-5 flex-lg-row  flex-column'>
            <div className='contact w-50 mx-5 rounded-3'>
                <h3 className='fw-light'>
                    Send us an email - hello@theonlinemakeupschool.com
                    <br />
                    <br />
                    <span style={{color:`#c87172`}}>
                    Click HERE to message us on Facebook
                    </span>
                    <br />
                    <br />
                    Write us a letter!
                    <br />
                    PO Box 719,
                    <br />
                    Five Dock PO,
                    <br />
                    NSW 2046,
                    <br />
                    AUSTRALIA
                </h3>
            </div>
            <div className='w-50 text-center bg-light p-5 mx-5 rounded-3'>
                <h3>
                Get In Touch
                </h3>
                <p>
                Or complete the below form and we'll be in touch as soon as possible
                </p>
            <Form.Control className='my-3' size="lg" type="text" placeholder="First Name" />
            <Form.Control className='my-3' size="lg" type="text" placeholder="Last Name" />
            <Form.Control className='my-3' size="lg" type="text" placeholder="Email" />
            <Form.Control className='my-3' size="lg" type="text" placeholder="Message" />
            <Button className='w-100 bt'>Submit</Button>
            </div>
            </Container>
        </div>
    );
};

export default Contact;