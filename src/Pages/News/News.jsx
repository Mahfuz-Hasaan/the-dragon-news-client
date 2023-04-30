import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from "react-icons/fa";


const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, rating, total_view, author,_id,category_id } = news
  return (
    <div className="my-5">
      <Card >
        <Card.Img className="p-4" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link className="text-decoration-none" to={`/category/${category_id}`}><Button className="d-flex align-items-center gap-3 bg-danger border-0 bg-opacity-75"  variant="primary"><FaArrowLeft></FaArrowLeft> <span className="fw-bold">All news in this category</span></Button></Link>
          </Card.Body>
      </Card>
    </div>
  );
};

export default News;
