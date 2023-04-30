import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaInstagram,FaTwitter,FaFacebook } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div className="my-4">
      <h4 className="py-2">Login With</h4>
      <div className="d-flex flex-column gap-3">
        <Button
          className="d-flex align-items-center gap-2 justify-content-center"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle>Login with Google
        </Button>
        <Button
          className="d-flex align-items-center gap-2 justify-content-center"
          variant="outline-dark"
        >
          <FaGithub></FaGithub>Login with Github
        </Button>
      </div>
      <div className="my-4 pt-2">
        <h4>Find Us On</h4>
        <Card >
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex align-items-center gap-2"><FaFacebook className="text-primary"></FaFacebook>Facebook</ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center gap-2"><FaTwitter className="text-info"></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center gap-2"><FaInstagram className="text-danger"></FaInstagram> Instagram</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="p-2 text-center bg-secondary bg-opacity-10">
        <Qzone></Qzone>
        </div>
    </div>
  );
};

export default RightNav;
