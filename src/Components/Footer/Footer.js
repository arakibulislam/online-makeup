import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import appimg from '../../images/app.png'
const Footer = () => {
    return (
        <footer className="footer bg-dark d-flex align-items-center mt-5">
            <Container className='mt-5 py-5 text-center text-white'>
                <div className='fs-3'>
                    <i className="fab fa-facebook me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <p>
                    Registered Accreditation # ICOES/00763/0771; Curriculum ID #s OMA-2501X, OMA-2502X, OMA-2503X
                </p>
                <p>
                    Online Makeup 2021 ©
                </p>
            </Container>
            <div>
                  <h5 className='text-white'>Dowonlode Our
                       Official Apps</h5>
                  <img src={appimg} className="img-fluid w-50" alt="" />
              </div>
        </footer>
    );
};

export default Footer;
