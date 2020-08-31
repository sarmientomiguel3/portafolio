import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Parallax } from 'react-parallax';
import {Link, animateScroll as scroll} from "react-scroll";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logoDota from "./static/img/logo-dota.jpg";
import logoRata from "./static/img/logo-rata.png";
import img1 from "./static/img/dota-img-1.jpg";
import img2 from "./static/img/dota-img-2.jpg";
import img3 from "./static/img/dota-img-3.jpg";

function App() {
  return (
    <div className="App bg-gray">
      <Parallax
        bgImage={require('./static/img/fondo.jpg')}
        bgImageAlt="No cargo ninguna inagen"
        strength={150}
      >
        <Container style={{height: '100vh'}}>
          <Row className="h-100">
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
              <div className="heading-wrapper p-5">
                <h1 className="mb-4 text-center text-md-left">Miguel Sarmiento</h1>
                <h3 className="d-flex align-items-center text-center text-md-left">
                  <img src={logoDota} alt="logo"></img>
                  <span className="ml-4">Lead Teacher</span>
                </h3>
                <h3 className="d-flex align-items-center text-center text-md-left">
                  <img src={logoRata} alt="logo"></img>
                  <span className="ml-4">Full-Stack Developer</span>
                </h3>
                <div className="btn-wrapper d-flex flex-column justify-content-between mt-4 flex-md-row">
                  <Link to="about" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Acerca de mi</div>
                  </Link>
                  <Link to="projects" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Proyectos</div>
                  </Link>
                  <Link>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Contactame</div>
                  </Link>
                  
                </div> 
              </div>
            </Col>
            
          </Row>
        </Container>
      </Parallax>
      <Container id="about" className="h-100-vh">
        <Row className="h-100">
          <Col xs ={12} md={6} className="d-flex flex-column justify-content-center">
            <h3 className="mb-5">Sobre mí</h3>
            <p>Egresado de de la Universidad Nacional de San Agustin en la Ciudad de Arequipa - Peru. Conocimientos tanto de PHP, JAVA, C#, 
              conozco programación Orientada a Objetos, Patrones de Diseño y Estructuras de Datos. También de conocimientos de Base de Datos MySQL y 
              PostgreSQL.He participado en el desarrollo de Aplicaciones mas enfocado al entretenimiento(juegos específicamente) con c# y Unity , 
              respecto al desarrollo en java es uno de mis lenguajes de programación base , utilizo git básico, pero prefiero usar IDES como smartgit, 
              por el momento solo he usado 2 bases de datos MYSQL Y POSTGRES. Deseo trabajar en Equipo remotamente de una Manera Eficaz, para poder 
              desarrollar mis Habilidades Dentro de un Equipo, y poder integrarme en el Desarrollo de un Proyecto mas Grande.</p>
          </Col>
          <Col xs ={12} md={6} className="d-flex flex-column justify-content-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={img2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid id="projects" className="h-100-vh">
        <Row>
          <Col xs={12}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h1 className="text-center my-5">Proyectos</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <div className="project-wrapper">
                    <a href="#" target="_blank">
                      <img className="w-100" src={img1} alt=""></img>
                      <div className="project-caption">
                        <h3 className="project-title text-center">Pagina Web 1</h3>
                        <h4 className="project-technologies text-center">HTML, CSS</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="project-wrapper">
                    <a href="#" target="_blank">
                      <img className="w-100" src={img2} alt=""></img>
                      <div className="project-caption">
                        <h3 className="project-title text-center">Pagina Web 1</h3>
                        <h4 className="project-technologies text-center">HTML, CSS</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="project-wrapper">
                    <a href="#" target="_blank">
                      <img className="w-100" src={img3} alt=""></img>
                      <div className="project-caption">
                        <h3 className="project-title text-center">Pagina Web 1</h3>
                        <h4 className="project-technologies text-center">HTML, CSS</h4>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
