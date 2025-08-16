import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Results-driven <b className="purple">Java Full Stack Developer</b> with 
              <b className="purple"> 2 years of hands-on experience</b> in designing, 
              developing, and deploying scalable, high-performance web applications.
              <br />
              <br />
              Proficient in <b className="purple">Java, Spring Boot, and microservices architecture</b>, 
              with strong expertise in building and consuming <b className="purple">RESTful APIs</b>.
              <br />
              <br />
              Adept at working with relational databases including 
              <b className="purple"> MySQL</b> and <b className="purple">PostgreSQL</b>.
              Familiar with front-end technologies such as 
              <b className="purple"> HTML, CSS, and JavaScript</b> to support end-to-end application development.
              <br />
              <br />
              Skilled in version control using <b className="purple">Git and GitHub</b>, 
              with experience deploying applications on cloud-based platforms like 
              <b className="purple"> Heroku</b> and <b className="purple">Vercel</b>.
              <br />
              <br />
              Knowledgeable in <b className="purple">Agile methodologies</b> and 
              <b className="purple"> CI/CD practices</b>, ensuring efficient and collaborative development workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sanjeeth11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-sanjeeth-raj-pisupaty-853837298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
