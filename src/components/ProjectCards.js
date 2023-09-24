import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.png"

function ProjectCards(props) {
  return (

<Col size={12} sm={6} md={4}>
<div className="proj-imgbx">
    <h4 style={{marginLeft:'25px'}}>{props.title}</h4>
  <img src={props.imgPath} />
  <div className="proj-txtx">
    <span>{props.description}</span>
  </div>
</div>
</Col>
)
}
export default ProjectCards;