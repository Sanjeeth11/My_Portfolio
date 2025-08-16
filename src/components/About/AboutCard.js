import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">PISUPATY SAI SANJEETH RAJ </span>
            from <span className="purple">Hyderabad, India.</span>
            <br />
            <br />
            I am a{" "}
            <b className="purple">Java Full Stack Developer</b> with{" "}
            <b className="purple">2 years of experience</b> in designing,
            developing, and deploying scalable web applications. I specialize in{" "}
            <b className="purple">Java, Spring Boot, REST APIs, and
            Microservices</b>, with strong knowledge of{" "}
            <b className="purple">MySQL</b> and{" "}
            <b className="purple">PostgreSQL</b>.
            <br />
            <br />
            I have hands-on experience with{" "}
            <b className="purple">Angular, HTML, CSS, JavaScript</b> for frontend
            and have deployed enterprise applications on{" "}
            <b className="purple">Heroku</b> and{" "}
            <b className="purple">Vercel</b>. I also follow{" "}
            <b className="purple">Agile methodologies</b> and CI/CD best
            practices.
            <br />
            <br />
            <b className="purple">Education:</b> B.Tech in Computer Science and
            Engineering, Presidency University, Bengaluru.
            <br />
            <b className="purple">Experience:</b> Full Stack Java Developer at W3
            Softech Pvt Ltd, Hyderabad (June 2023 – Present).  
            <br />
            <b className="purple">Internships:</b> Digital Marketing Intern (Future
            Revolutions, Bengaluru) | Full Stack Developer (Vcube Software
            Solutions, Hyderabad).
            <br />
            <br />
            Apart from coding, I love to:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build efficient and scalable applications that make a real
            difference!"
          </p>
          <footer className="blockquote-footer">P. Sai Sanjeeth Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
