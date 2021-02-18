import React from "react";
import { Container, Nav, Section1, Flex, About, Tech, Contact } from "./App.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "./images/down-chevron.svg";
import js from "./images/js.svg";
import react from "./images/react.svg";
import html5 from "./images/html.svg";
import next from "./images/next.png";
import css from "./images/css.svg";
import phone from "./images/phone.svg";
import mail from "./images/gmail.svg";
import whatsapp from "./images/whatsapp.svg";
import github from "./images/github.svg";

const App = () => {
  AOS.init();
  return (
    <>
      <Nav>
        <a href="#">Home</a>
        <a href="#story">My Story</a>
        <a href="#tech">Technologies</a>
        <a href="#contact">Contact</a>
      </Nav>
      <Section1 data-aos="fade-in" data-aos-duration="2000">
        <Container>
          <Flex>
            <div className="image-div" data-aos="fade-right" data-aos-duration="1000">
              <p className="desc">Frontend Developer</p>
            </div>
            <div className="text-div" data-aos="fade-left" data-aos-duration="1000">
              <div className="circle"></div>
              <h2 className="greeting">Hi there,</h2>
              <h3 className="name">
                I'm <span>Joshua Obodai</span>
              </h3>
              <div className="chevron">
                <a href="#story">
                  <img src={image} alt="chevron-down" />
                </a>
              </div>
              <About
                id="story"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <div className="story">
                  <h2>My Story</h2>
                </div>
                <div className="green-bg">
                  <div className="ash-bg">
                    <p className="quote">
                      "I strongly believe that I can be part of great ideas and innovations that can
                      change the world, one <span>code</span> at a time"
                    </p>
                  </div>
                </div>
              </About>
            </div>
          </Flex>
        </Container>
      </Section1>
      <Tech id="tech">
        <div className="story">
          <h2>Technologies</h2>
        </div>
        <Container>
          <div
            className="languages"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <h3>Languages I Speak</h3>
            <Flex>
              <img src={html5} alt="html5" />
              <img src={css} alt="css" />
              <img src={js} alt="javascript" />
              <img src={react} alt="reactjs" />
              <img src={next} alt="nextjs" />
            </Flex>
          </div>
        </Container>
      </Tech>
      <Contact className="contact" id="contact">
        <div className="story">
          <h2>Contact</h2>
        </div>
        <h2>
          <span>Lagos,</span> Nigeria
        </h2>
        <p>08104322799</p>
        <div className="icons">
          <Flex>
            <div>
              <a href="https://wa.me/2348104322799">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
            <div>
              <a href="mailto:obodaij@gmail.com">
                <img src={mail} alt="gmail" />
              </a>
            </div>
            <div>
              <a href="tel:2348104322799">
                <img src={phone} alt="call" />
              </a>
            </div>
            <div>
              <a href="https://github.com/joshmoy">
                <img src={github} alt="call" />
              </a>
            </div>
          </Flex>
        </div>
      </Contact>
    </>
  );
};

export default App;
