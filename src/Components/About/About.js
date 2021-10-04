import React from 'react';
import './About.css'
import background from '../../images/background11.jpg';
import about from '../../images/about.png'
import bgTwo from '../../images/bgTwo.png'
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className='about' style={{
                backgroundImage: `url(${bgTwo})`,
                backgroundPosition: `top`,
                backgroundSize:`100%`,
                backgroundAttachment: `fixed`,
                backgroundRepeat:`no-repeat`
            }} >
                <h1 className='w-50 mx-auto'>
                WHO ARE WE?
                </h1>
            </div>
            <h1 className='text-center fw-bold mt-5'>
                ABOUT US
            </h1>
            <div className='pt-5 mt-5' style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: `center`,
            }} >

                <Container className='py-2'>
                    <Row className='my-5 d-flex align-items-center'>
                        <Col sm={12} lg={6}>
                            <img className='w-100' src={about} alt="" />
                        </Col>
                        <Col className='bg-light py-5 px-4 shadow-lg' sm={12} lg={6}>
                            <h2>
                                <b>Who Are We?</b>
                            </h2>
                            <p className='text-muted'>
                                Based in Sydney, Australia, The Online Makeup School is a premium digital learning platform with high-quality online courses that teach people how to do makeup like a pro.
                                <br />
                                <br />
                                Founded by Sharon Farrell, an Irish makeup artist with over 14 years of experience as a makeup artist and educator. Sharon started her career working with brands like Benefit Cosmetics, Lancome and MAC, before embarking on a successful freelance career after moving to Australia. During that time, she launched her YouTube channel, which became one of Australia's largest and most influential beauty platforms.
                                <br />
                                <br />
                                Growing up in rural Ireland, Sharon didn’t have access to a college or school where she could formally learn how to become a professional makeup artist, so she had to figure it all out on her own. So about 10 years ago, Sharon swore she would one day create the course that she needed when she was starting out as a makeup artist. And so, The Online Makeup School was born.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;