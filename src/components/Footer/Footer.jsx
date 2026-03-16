import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const [notification, setNotification] = useState({
    message: "",
    type: ""
  });
  const [isSending, setIsSending] = useState(false);
  const notificationTimeoutRef = useRef(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
    notificationTimeoutRef.current = setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) {
      return;
    }

    const { fullname, email, message } = formData;
    const trimmedData = {
      fullname: fullname.trim(),
      email: email.trim(),
      message: message.trim()
    };

    if (!trimmedData.fullname || !trimmedData.email || !trimmedData.message) {
      showNotification("Please fill all fields before submitting.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      showNotification("Email service is not configured. Please try again later.", "error");
      return;
    }

    try {
      setIsSending(true);
      const response = await emailjs.send(
        serviceId,
        templateId,
        trimmedData,
        userId
      );

      if (response?.status === 200) {
        showNotification("Email sent successfully!", "success");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        showNotification("Unable to confirm email delivery. Please try again.", "error");
      }
    } catch (err) {
      console.error("FAILED...", err);
      showNotification("Failed to send email. Please try again after some time.", "error");
    } finally {
      setIsSending(false);
    }
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Contact</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Bangalore Urban, Karnataka, India</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+917760802034">+917760802034</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:pankajkumarpal901@gmail.com">pankajkumarpal901@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsSlack />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input 
                type="text" 
                name="fullname" 
                placeholder="Fullname..." 
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input 
                type="email" 
                name="email" 
                placeholder="Email..." 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea 
                name="message" 
                cols="30" 
                rows="10" 
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>
          {notification.message && <Notification status={notification.type}>{notification.message}</Notification>}
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: var(--muted);
        :hover {
          color: var(--accent);
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--surface);
        border: 1px solid var(--border);
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: var(--accent);
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: var(--surface);
    border: 1px solid var(--border);
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid var(--border);
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: var(--card);
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: var(--accent);
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px rgba(20, 184, 166, 0.32));
      cursor: pointer;
      color: #fff;
      font-weight: 500;
      :hover {
        background-color: var(--accent-hover);
        filter: drop-shadow(0px 6px 9px rgba(13, 148, 136, 0.42));
      }

      :disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ status }) => (status === "success" ? "var(--success)" : "var(--error)")};
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


