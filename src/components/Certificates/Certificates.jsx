import React from 'react'
import styled from 'styled-components';
import CertificateSliderComp from './CertificateSlider';
import { Zoom } from 'react-awesome-reveal';

const Certificates = () => {
  return (
    <Container id='certificate'>
        <Zoom>
            <h1>Recent <span className="green">Certifications</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
        </Zoom>
        <Slide>
            <CertificateSliderComp/>
        </Slide>
    </Container>
  )
}

export default Certificates;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``