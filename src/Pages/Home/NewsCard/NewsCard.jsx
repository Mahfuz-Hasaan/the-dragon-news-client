import moment from "moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, author,_id } = news;
  return (
    <div>
      <Card className="my-4 me-4">
        <Card.Header className="d-flex align-items-center">
            <Image style={{width:"41px"}} src={author?.img} roundedCircle />
            
                <div className="ps-2 flex-grow-1">
                    <p className="mb-1">{author?.name}</p>
                    <p className="mb-1">{moment(author?.published_date).format("YYYY-MM-DD")}</p>
                </div>
                <div className="d-flex gap-2">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
        
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
                details.length < 300 ? <>{details}</> : <>{details.slice(0,250)}......</>
            }
            <br />
            <Link className="text-danger" to={`/news/${_id}`}>Read More</Link>
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">
            <div className="d-flex align-items-center gap-2">
                <Rating
                className="text-warning"
                readonly
                placeholderRating={rating?.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                >
                </Rating>
                <div className="flex-grow-1">{rating?.number}</div>
                <div className="d-flex align-items-center gap-2"><FaEye></FaEye>{total_view}</div>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
