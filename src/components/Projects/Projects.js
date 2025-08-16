import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* EMS Frontend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Employee Management System (EMS) Frontend"
              description="Developed the frontend for EMS using Angular.js and Bootstrap. 
              Provides role-based dashboards for Admin, Employee, and Manager. 
              Includes employee CRUD operations, attendance tracking, and 
              payslip generation modules with responsive UI."
              ghLink="https://github.com/w3softechindia/W3Employee_management_Frontend-"
            />
          </Col>

          {/* EMS Backend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Management System (EMS) Backend"
              description="Built a Spring Boot backend with layered architecture. 
              Implemented RESTful APIs for employee, department, and payroll management. 
              Integrated MySQL for persistent storage and used JWT-based authentication 
              for secure login across multiple roles."
              ghLink="https://github.com/w3softechindia/W3Employee_management_Backend"
            />
          </Col>

          {/* Recruitment Portal */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Recruitment Portal"
              description="A recruitment platform built with Angular (frontend) and Spring Boot (backend). 
              Features include job posting, candidate applications, interview scheduling, 
              and real-time status updates. Supports email notifications and role-specific 
              workflows for Admin, Recruiter, and Candidate."
              ghLink="https://github.com/Sanjeeth11/MyRecruitmentFrontEnd"
            />
          </Col>

          {/* Spring Boot + React Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spring Boot with React Project"
              description="A full-stack project combining Spring Boot (backend) with React (frontend). 
              Showcases CRUD operations, REST API integration, and JWT authentication. 
              Focused on building a scalable and modular architecture for future extensions."
              ghLink="https://github.com/Sanjeeth11/Spring-boot-With-React-Project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
