import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputListFormRowContainer from "./rows/InputListFormRowContainer";
import { useDispatch } from "react-redux";
import { createNft } from "../../reducers/nftSlice";

const AddNftForm = ({ history, name, controlId }) => {
	const [nftFormData, setNftFormData] = useState({
		title: "",
		author: name,
		createdBy: name,
		rating: 0,
		videoSrc: "",
		imgUrls: [],
		preparationTime: 0,
		cookTime: 0,
		ingredients: [],
		instructions: [],
		supplies: [],
		description: "",
	});

	const dispatch = useDispatch();

	// const handleSubmit = () => {
	// 	console.log("nft form data: ", nftFormData);
	// };

	return (
		<Container>
			<Row className="nft-form-row">
				<Form.Group controlId={`nftForm.${controlId}`}>
					<Form.Label>Title of nft</Form.Label>
					<Form.Control
						as="input"
						rows={3}
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								title: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="formFile">
					<Form.Label>Upload nft Video (up to 3 minutes)</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								video: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 1</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								imgUrls: [...nftFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				{nftFormData?.imgUrls[0] ? (
					<Image src={nftFormData?.imgUrls[0]} />
				) : null}

				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 2</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								imgUrls: [...nftFormData.imgUrls, e.target.files[0].name],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 3</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								imgUrls: [...nftFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 4</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								imgUrls: [...nftFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 5</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								imgUrls: [...nftFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<InputListFormRowContainer
				titleOfRow="List of instructions"
				addBtnTitle="Add Instruction"
				handleChange={(e) =>
					setNftFormData({
						...nftFormData,
						instructions: [...nftFormData.instructions, e.target.value],
					})
				}
			/>

			<InputListFormRowContainer
				titleOfRow="List of supplies"
				addBtnTitle="Add Supply"
				handleChange={(e) =>
					setNftFormData({
						...nftFormData,
						supplies: [...nftFormData.supplies, e.target.value],
					})
				}
			/>

			<InputListFormRowContainer
				titleOfRow="List of ingredients"
				addBtnTitle="Add Ingredient"
				handleChange={(e) =>
					setNftFormData({
						...nftFormData,
						ingredients: [...nftFormData.ingredients, e.target.value],
					})
				}
			/>

			<Row className="nft-form-row">
				<Form.Group controlId="nftForm.PreparationTime">
					<Form.Label>Preparation Time</Form.Label>
					<Form.Control
						type="time"
						rows={3}
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								preparationTime: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="nftForm.CookTime">
					<Form.Label>Cook Time</Form.Label>
					<Form.Control
						type="time"
						rows={3}
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								cookTime: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="nftForm.TotalServings">
					<Form.Label>Total Servings</Form.Label>
					<Form.Control
						type="number"
						rows={3}
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								totalServings: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="nft-form-row">
				<Form.Group controlId="nftForm.Description">
					<Form.Label>Description of nft</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						onChange={(e) =>
							setNftFormData({
								...nftFormData,
								description: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Button onClick={() => dispatch(createNft(nftFormData))}>
				Submit Form
			</Button>
		</Container>
	);
};

export default AddNftForm;
