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
              imgPath={timbernet}
              isBlog={false}
              title="Timbernet"
              description="TIMBERNET is an online application which acts as an interfacebetween the Furniture shops and Local residents in that area.• Location Based Recommendation,ChatBot are its unique features."
              ghLink="https://github.com/Abhibhab/TimberNet"
              demoLink="https://timbernet.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThoughtVerse}
              isBlog={false}
              title="ThoughtVerse"
              description="Thoughtverse is an open-source AI Quotation tool for modern world to discover, create and share creative Thoughts."
              ghLink="https://github.com/Abhibhab/Thoughtverse"
              demoLink="https://thoughtverse.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Graph}
              isBlog={true}
              title="Graph Blog"
              description="Clients can manage the blog from a dedicated Content Management System(CMS).GraphQL is used for the api service."
              ghLink="https://github.com/Abhibhab/Graphblog"
              demoLink="https://graphblog-gmfm8o4q8-abhibhab.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Evogym"
              description="we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll for our  Complete Typescript Fitness Application"
              ghLink="https://github.com/Abhibhab/Gym-type"
              demoLink="https://gym-typrescript.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disease}
              isBlog={false}
              title="DISEASE PREDICTION SYSTEM"
              description="• It is helpful in detection of various diseases like Heartdisease,Parkinson’s Disease and Diabetes.• Support Vector Machine and Logistic Regression is used."
              ghLink="https://github.com/Abhibhab/Abhiml1"
              demoLink="https://abhiml1.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="MOVIE RECOMMENDER"
              description="• A movie recommender that recommends movies using the K NearestNeighbours algorithm from a list of 5000 movies.• Colaborative(User Based) And Content Based Filtering are used."
              ghLink="https://github.com/Abhibhab/movierec21"
              demoLink="https://abhiml2.onrender.com/"
            />
          </Col>
         

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
