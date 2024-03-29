import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiFillMail } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Slide } from "react-awesome-reveal";
import 'primeicons/primeicons.css';
        



const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="darkblue">Pankaj Kumar Pal</h1>
          <h3>Senior Software Engineer 1 @ HCL Software</h3>
          <h3>M.tech from Indian Institute of Technology, Guwahati</h3>
          <p>
          Dynamic and results-driven Machine Learning Engineer with 3.5+ years of professional experience in research and creating proof of concept (POC) solutions for complex problem statements. Adept in developing various client/server applications and designing ML training pipelines, as well as implementing MLOps and DevOps processes to ensure efficient and effective delivery of projects. Strong technical skills, combined with excellent analytical and problem-solving abilities, make me a valuable asset in any team environment.
          </p>
          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://github.com/Pankaj901">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/pal-pankaj/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="/">
                  <AiFillMail />
                </a>
              </span>
              <span>
                <a href="https://leetcode.com/pankajpal901/">
                  <SiLeetcode />
                </a>
              </span>
              <span>
                <a href="https://www.hackerrank.com/profile/pankajkumarpal91">
                  <FaHackerrank />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/code_with_pkp/">
                  <AiOutlineInstagram />
                </a>
              </span>              
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="images/pkp.jpeg"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 20rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
