import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "../review-card";
import { Row } from "react-bootstrap";
import { createNft, removeNft } from "../../reducers/nftSlice";

const NftPage = () => {
	const { nftId } = useParams();
	const nft = useSelector((state) => state.nfts.find((nft) => nft.id === parseInt(nftId)));

	const [updatedNft, setUpdatedNft] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleDelete = () => {
		dispatch(removeNft(nftId));
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const editnft = () => {
		setIsUpdating(true);
		dispatch(createNft());
	};

	const updateNft = () => {
		setIsUpdating(true);
		dispatch(updateNft());
		setIsUpdating(false);
	};

	return (
		<Container>
			<h1>
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.NftTitle`}>
						<Form.Control
							as="input"
							placeholder={nft?.title}
							onChange={(e) =>
								setUpdatedNft({ ...updatedNft, title: e.target.value })
							}
						/>
					</Form.Group>
				) : (
					nft?.title
				)}
			</h1>

			<p>
				{" "}
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.NftAuthor`}>
						<Form.Control
							as="input"
							placeholder={nft?.author}
							onChange={(e) =>
								setUpdatedNft({ ...updatedNft, author: e.target.value })
							}
						/>
					</Form.Group>
				) : (
					nft?.author
				)}
			</p>
			<Row className="nft-header">
				<div className="col-md-4">
					<Image src={nft?.media?.imageUrls[0]} width="100%" />
				</div>

				<div className="col-md-4">
					<ul>
						<li>
							{" "}
							Preparation Time:{" "}
							{isUpdating ? (
								<Form.Group
									controlId={`inputListFormRow.NftPreparationTime`}
								>
									<Form.Control
										as="input"
										rows={3}
										placeholder={nft?.preparationTime}
										onChange={(e) =>
											setUpdatedNft({
												...updatedNft,
												preparationTime: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								nft?.preparationTime
							)}{" "}
							min
						</li>
						<li>
							{" "}
							Cook Time:{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.NftCookTime`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={nft?.cookTime}
										onChange={(e) =>
											setUpdatedNft({
												...updatedNft,
												cookTime: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								nft?.cookTime
							)}{" "}
							min
						</li>
						<li>
							{" "}
							Total Time: {nft?.preparationTime + nft?.cookTime} min
						</li>
						<li>
							{" "}
							Total Serving:{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.NftTotalServings`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={nft?.totalServings}
										onChange={(e) =>
											setUpdatedNft({
												...updatedNft,
												totalServings: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								nft?.totalServings
							)}
						</li>
					</ul>
				</div>

				<div className="col-md-4">
					{isUpdating ? (
						<Button
							className="nft-action-btn"
							onClick={() => updateNft()}
						>
							Save
						</Button>
					) : (
						<Button className="nft-action-btn" onClick={editnft}>
							Edit
						</Button>
					)}

					{!isUpdating ? (
						<Button
							variant="danger"
							className="nft-action-btn"
							onClick={handleShow}
						>
							Delete
						</Button>
					) : null}

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title></Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Are you sure you want to delete this nft?
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleDelete}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</Row>
			<Row className="ingredients-container">
				<h3>Ingredients</h3>
				<ul>
					{nft?.ingredients?.map((ingredient, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.Ingredient`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={ingredient}
										onChange={(e) =>
											setUpdatedNft({
												...updatedNft,
												ingredient: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								ingredient
							)}
						</li>
					))}
				</ul>
			</Row>
			<Row className="directions-container">
				<h3>Instructions</h3>
				<ul>
					{nft?.directions?.map((direction, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.NftDirection`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={direction}
										onChange={(e) =>
											setUpdatedNft({
												...updatedNft,
												direction: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								direction
							)}
						</li>
					))}
				</ul>
			</Row>
			<Row className="description-container">
				<h3>Additonal Tips & Advice</h3>
				<p>
					{" "}
					{isUpdating ? (
						<Form.Group controlId={`inputListFormRow.NftDescription`}>
							<Form.Control
								as="input"
								rows={3}
								placeholder={nft?.description}
								onChange={(e) =>
									setUpdatedNft({
										...updatedNft,
										description: e.target.value,
									})
								}
							/>
						</Form.Group>
					) : (
						nft?.description
					)}
				</p>
			</Row>
			<Row className="review-container">
				<h3>Reviews</h3>
				{nft?.reviews?.map((review) => (
					<ReviewCard className="col-md-3" review={review} key={review.id} />
				))}
			</Row>
		</Container>
	);
};

function areEqual(prevProps, nextProps) {
	/*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
	return true;
}

export default React.memo(NftPage, areEqual);
