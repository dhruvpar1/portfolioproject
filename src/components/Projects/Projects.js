import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import timbernet from "../../Assets/Projects/Timbernet.png";
import disease from "../../Assets/Projects/disease.jpg"
import movie from "../../Assets/Projects/movie.jpg"
import ThoughtVerse  from "../../Assets/Projects/ThoughtVerse.png"
import Gym from"../../Assets/Projects/gym.png"
import Graph from"../../Assets/Projects/graph.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
                    imgPath={ThoughtVerse}
                    isBlog={false}
                    title="ThoughtVerse"
                    description="Thoughtverse is an open-source AI Quotation tool for modern world to discover, create and share creative Thoughts."
                    ghLink="https://github.com/dhruvpar1/DayThoughts"
                    demoLink="https://thoughtverse.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.iphonelife.com/sites/iphonelife.com/files/styles/promo_in_content_breakpoints_theme_newmango_mobile_2x/public/emoji.jpg?itok=bvQy66kO"}
              isBlog={false}
              title="Text To emoji"
              description="Thoughtverse is an open-source AI Quotation tool for modern world to discover, create and share creative Thoughts."
              ghLink="https://github.com/dhruvpar1/textToEmoji"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Graph}
              isBlog={true}
              title="web Blog"
              description="Clients can manage the blog from a dedicated Content Management System(CMS)."
              ghLink="https://github.com/dhruvpar1/WebPost"
              demoLink="https://graphblog-gmfm8o4q8-abhibhab.vercel.app/"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://w7.pngwing.com/pngs/951/972/png-transparent-jigsaw-puzzle-jigsaw-puzzles-puzzle-template-angle-3d-computer-graphics-thumbnail.png"}
              isBlog={false}
              title="Puzzle"
              description="• A javascript based puzzle game."
              ghLink="https://github.com/dhruvpar1/puzzle"
              // demoLink="https://abhiml1.onrender.com/"
            />
          </Col>
         
         

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
