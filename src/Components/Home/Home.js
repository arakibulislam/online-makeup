import React from 'react';
import './Home.css'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import image from '../../images/gradient-2.png'
import imgOne from '../../images/girl.jpg'
import imgTwo from '../../images/img.png'
import imgThree from '../../images/img-main.jpg'
import imgFour from '../../images/girl-1.jpg'
import imgFive from '../../images/girl-3.jpg'
import OurCourses from '../../hooks/ourCourses';
import { Link } from 'react-router-dom';



const Home = () => {
    const [courses] = OurCourses();
    return (
        <div className='pt-4'>
            <Row xs={1} lg={2} className='align-items-center g-0 my-5 banner'>
                <Col xs={{ order: 2 }} lg={{ order: 1 }} >
                    <Carousel >
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgOne}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgFour}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgFive}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={{ order: 1 }} lg={{ order: 2 }} >
                    <Card className="bg-dark text-white">
                        <Card.Img src={imgThree} alt="Card image" />
                        <Card.ImgOverlay className='text-center '>
                            <Card.Img className='mx-auto imgs' src={imgTwo} alt="Card image" />
                            <h1 className='banner-tag'>
                                ELEVATE YOUR MAKEUP SKILLS AND LAUNCH YOUR DREAM CAREER
                                <br />
                                <Link to='/about'><Button variant="outline-light" className='px-5 mt-3'><b>MORE ABOUT</b></Button></Link>
                            </h1>

                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Container className='position-relative'>
                <img className='image' src={image} alt="" />
                <div className='text-center'>
                    <h1 className='fw-bold bg-dark text-light py-3 w-75 mx-auto my-5 rounded'>
                        DISCOVER OUR COURSES
                    </h1>
                    <p className='px-5'>
                        The Online Makeup Academy offers an online curriculum taught by New York City industry professionals. Become a certified makeup artist and start a successful career in this exciting industry! You’ll learn everything you need to do from the basic fundamentals, all the way to the advanced techniques, including celebrity, fashion editorial, bridal, and more.
                    </p>
                </div>
                <Row xs={1} lg={2} className="g-4 mx-5">
                    {
                        courses.slice(0,4).map(course =>  <Courses key = {course.id} course={course}></Courses>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;