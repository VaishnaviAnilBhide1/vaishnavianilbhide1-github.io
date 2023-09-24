import python from "../assets/img/python.png";
import htmlcss from "../assets/img/PinClipart.com_vanilla-extract-clipart_3922412.png";
import javascript from "../assets/img/logo-javascript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from "../assets/img/react-2.svg";
import typescript from "../assets/img/typescript.svg";
// import bootstrap from "../assets/img/bootstrap-icon.svg"
import spring from "../assets/img/spring-3.svg"
import cp from "../assets/img/c-1.svg"
import node from "../assets/img/nodejs-1.svg"
import sql from "../assets/img/mysql-logo.svg"
import flask from "../assets/img/flask.svg"
import angular from "../assets/img/angular-icon-1.svg"
import { Cpu } from "react-bootstrap-icons";
import tableau from "../assets/img/tableau-logo.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Take a look at my skills! </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javscript</h5>
                            </div>
                            <div className="item">
                                <img src={htmlcss} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={cp} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>My SQL</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={tableau} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular JS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
