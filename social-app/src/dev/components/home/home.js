import React, { Component } from 'react';
// import { Route,Switch,Link } from "react-router-dom";
// import image1  from "../../../img/1.jpg";
// import image2  from "../../../img/Banner1.jpg";
// import image3  from "../../../img/Banner2.jpg";
import NavbarSocial from '../navbar/navbar';
import './home.css';
import {Carousel,Button,Col,Thumbnail,Grid,Row} from 'react-bootstrap';


class Home extends Component {
  constructor(props){
    super(props)
    this.gotoPage=this.gotoPage.bind(this)
  }
  gotoPage(page){
    this.props.history.push(page)
  }
  render() {
    // console.log(this)
    return (
      <div>
        <NavbarSocial gotoPage={(page)=>this.gotoPage(page)} />
      <Carousel>
  <Carousel.Item>
    {/* <img width={900} height={500} alt="900x500" src={image1} /> */}
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img width={900} height={500} alt="900x500" src={image2} /> */}
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img width={900} height={500} alt="900x500" src={image3} /> */}
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h2>Thumbnail label</h2>
        <p>
          <Button bsStyle="primary">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h2>Thumbnail label</h2>
        <p>
          <Button bsStyle="primary">Button</Button>
         
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h2>Thumbnail label</h2>
        <p>
          <Button bsStyle="primary">Button</Button>
          
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>;
{/* grid */}
<Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
    <Col xsHidden md={4}>
      <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
    </Col>
  </Row>
</Grid>;
      </div>
    );
  }
}

export default Home;
