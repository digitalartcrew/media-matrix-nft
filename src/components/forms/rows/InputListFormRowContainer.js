import React, { useState } from "react";
import InputListFormRow from "../rows/InputListFormRow";
import Button from "react-bootstrap/Button";
import { BsPlusLg } from "react-icons/bs";

const InputListFormRowContainer = ({
	titleOfRow,
	addBtnTitle,
	handleChange,
	controlId,
}) => {
	const [rowCount, setRowCount] = useState(1);
	const [rows, setRows] = useState([]);

	const deleteRow = (index) => {
		rows.slice(index, 1);
		setRows([...rows]);
	};

	const addRow = () => {
		setRowCount(rowCount + 1);
		setRows([
			...rows,
			<InputListFormRow
				controlId={controlId}
				handleChange={handleChange}
				rowCount={rowCount}
				key={rowCount}
				deleteHandler={() => deleteRow(rowCount - 1)}
			/>,
		]);
	};

	return (
		<>
			<>
				<h4>{titleOfRow}</h4>
				{rows.map((row) => row)}
			</>
			<Button className="add-btn" variant="success" onClick={() => addRow()}>
				<BsPlusLg /> {addBtnTitle}
			</Button>
		</>
	);
};

export default InputListFormRowContainer;
