import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiHeroku,
  SiGithub,
  SiEclipseide,
  SiMysql,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.8rem" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p style={{ fontSize: "0.8rem" }}>Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.8rem" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "0.8rem" }}>DBMS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "0.8rem" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{ fontSize: "0.8rem" }}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "0.8rem" }}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
