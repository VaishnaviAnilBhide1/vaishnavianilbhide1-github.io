import target from "../assets/img/target.svg";
import visioncultura from "../assets/img/visioncultura.jpeg";
import teq from "../assets/img/1528616530820.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

 const Experience = () => {
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
    <section className="skill" id="workexp">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Work Experience</h2>
                        <p> Here's my work experience! Download my resume for more details </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={target} alt="Image" />
                                <h5>Software Developer</h5>
                            </div>
                            <div className="item">
                                <img src={visioncultura} alt="Image" />
                                <h5>Software Development Intern</h5>
                            </div>
                            <div className="item">
                                <img src={teq} alt="Image" />
                                <h5>ML intern</h5>
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
export default Experience;