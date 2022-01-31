import { BsStarFill, BsStar } from "react-icons/bs";

const FiveStarRating = ({ rating = 4 }) => {
	const starSet = [];
	let lastIdx = 0;

	for (let i = 0; i < Math.floor(rating); i++) {
		starSet.push(<BsStarFill key={i} />);
		lastIdx = i;
	}

	for (let i = 0; i < 5 - Math.floor(rating); i++) {
		starSet.push(<BsStar key={lastIdx + i} />);
	}

	return <div>{starSet}</div>;
};

export default FiveStarRating;
