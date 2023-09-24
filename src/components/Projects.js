import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-controlling-dashboard.png";
import projImg2 from "../assets/img/payroll.jpeg";
import projImg3 from "../assets/img/clipart1548428.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCards from "../components/ProjectCards";
import emotion from '../assets/img/emotion.png'

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
  <section className="project" id="projects">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Think of your code as a playground – make it fun, exciting, and full of surprises. After all, software should be enjoyable for both users and developers</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                  <Row>

                          <ProjectCards
                          imgPath={projImg1}
                          title="Task tracking Dashboard"
                          description="Created a dashboard that displays the progress of ongoing labeling tasks. Users can monitor the completion status of tasks and the performance of labelers"
                        />

                        <ProjectCards
                          imgPath={projImg2}
                          isBlog={false}
                          title="Payroll management system"
                          description="Designed and developed a comprehensive Payroll Management System using SQL, aimed at efficiently managing employee payroll data for a medium-sized organization"
                        />

                          <ProjectCards
                          imgPath={projImg3}
                          isBlog={false}
                          title="Find my recipie"
                          description="Devised a recipe finder application that allows users to search for recipes based on ingredients, cuisine, or dietary preferences."
                        />
                        
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp}></img>
</section>
)
}
