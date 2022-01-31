import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { BsXLg } from "react-icons/bs";

const InputListFormRow = ({ handleChange, controlId, deleteHandler }) => {
	return (
		<Row className="input-list-form-row">
			<div className="input-list-form-row__inputs">
				<div className="input-list-form-row__input">
					<Form.Group controlId={`inputListFormRow.${controlId}`}>
						<Form.Control as="input" rows={3} onChange={handleChange} />
					</Form.Group>
				</div>

				<div className="input-list-form-row__btn-container">
					<Button
						variant="danger"
						onClick={deleteHandler}
						className="input-list-form-row__action-btn"
					>
						{" "}
						<BsXLg />
					</Button>
				</div>
			</div>
		</Row>
	);
};

export default InputListFormRow;
