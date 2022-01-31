import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import FiveStarRating from "../five-star-rating";

const EntityCard = ({ entity, columnCount, linkUrl, mediaType }) => {
	const columnClass = `entity-card col-md-${12 / columnCount}`;
	const audioPlayer = (
		<audio controls src="#" className="w-100">
			Your browser does not support the
			<code>audio</code> element.
		</audio>
	);

	const imgHolder = (
		<img
			className="card-img-top"
			src="https://dummyimage.com/600x350/ced4da/6c757d"
			alt="..."
		/>
	);

	return (
		<Container className={`entity-card-container ${columnClass}`}>
			<Link to={linkUrl}>
				<div className="card h-100 shadow border-0">
					{imgHolder}
					<div>{mediaType === "audio" ? audioPlayer : null}</div>
					<div className="card-body p-4">
						<div className="badge bg-primary bg-gradient rounded-pill mb-2">
							News
						</div>
							<h5 className="card-title mb-3">{entity.title}</h5>
						<p className="card-text mb-0">{entity.description}</p>
						{/* <FiveStarRating /> */}
					</div>
					<div className="card-footer p-4 pt-0 bg-transparent border-top-0">
						<div className="d-flex align-items-end justify-content-between">
							<div className="d-flex align-items-center">
								<img
									className="rounded-circle me-3"
									src="https://dummyimage.com/40x40/ced4da/6c757d"
									alt="..."
								/>
								<div className="small">
									<div className="fw-bold">Kelly Rowan</div>
									<div className="text-muted">
										March 12, 2021 &middot; 6 min read
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</Container>
	);
};
export default EntityCard;
