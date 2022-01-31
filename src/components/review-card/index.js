import Card from "react-bootstrap/Card";
import FiveStarRating from "../five-star-rating";

const ReviewCard = ({ review }) => {
	return (
		<Card style={{ width: "18rem", margin: "10px" }}>
			<Card.Body>
				<Card.Title>
					<FiveStarRating rating={review.rating} />
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{review.username} - {review.date}
				</Card.Subtitle>
				<Card.Text>{review.message}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ReviewCard;
