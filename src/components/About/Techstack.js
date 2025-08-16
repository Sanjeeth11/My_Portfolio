import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiAngular,
  SiPostgresql,
  SiSpringboot,
  SiSpringsecurity,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "0.8rem" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p style={{ fontSize: "0.8rem" }}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.8rem" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.8rem" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.8rem" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.8rem" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "0.8rem" }}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p style={{ fontSize: "0.8rem" }}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity />
        <p style={{ fontSize: "0.8rem" }}>Spring Security</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ fontSize: "0.8rem" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "0.8rem" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "0.8rem" }}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Techstack;
