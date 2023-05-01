import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import editorsInsight1 from '../../../assets/editorsInsight1.png'
import editorsInsight2 from '../../../assets/editorsInsight2.png'
import editorsInsight3 from '../../../assets/editorsInsight3.png'

const EditorInsigt = () => {
  return (
    <div className="">
      <h2>Editor Insight</h2>
       <Row>
       <Col lg={4}>
       <Card className="">
          <Card.Img className="p-3" variant="top" src={editorsInsight1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       </Col>
        <Col lg={4}>
        <Card>
          <Card.Img className="p-3" variant="top" src={editorsInsight2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card>
          <Card.Img className="p-3" variant="top" src={editorsInsight3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </div>
    
  );
};

export default EditorInsigt;
