import React, { useRef } from 'react'
import Slider from 'react-slick';
import Certificate from './Certificate';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "images/Certifications/genai_deeplearning.png",
        disc : "Generative AI with Large Language Models by Coursera, DeepLearning.AI & Amazon Web Services",
        link: "https://www.coursera.org/account/accomplishments/verify/W52AY5HY6EK2"
    },
    {
        img : "images/Certifications/aws_partner_gen_ai.png",
        disc : "AWS Partner: Generative AI on AWS Essentials(Business)by Amazon Web Services (AWS)",
        link : "https://www.credly.com/badges/b427a493-355a-45cb-bfb7-9c0d87a15707/public_url"
    },
    {
        img : "images/Certifications/ann.png",
        disc : "Neural Networks in Python: Deep Learning for Beginners by Udemy",
        link: "https://www.udemy.com/certificate/UC-f7a00311-366a-4424-b094-dd07246da8bc/"
    },
    {
        img : "images/Certifications/yolo.png",
        disc : "Train YOLO for Object Detection with Custom Data by Udemy",
        link: "https://www.udemy.com/certificate/UC-2e7f9f8e-df8a-4627-a133-ad6571bd2efc/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const CertificateSliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Certificate item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default CertificateSliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`