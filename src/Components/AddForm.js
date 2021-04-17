import React, { useState } from "react";

export default function AddForm() {
	const [num, setNum] = useState(0);
	const [sum, setSum] = useState(0);
	function handleChange(e) {
		setNum(e.target.value);
	}
	function handleSubmit(e) {
		setSum(sum + Number(num));
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="number" value={num} onChange={handleChange} />
			<input type="submit" value="Cộng" />
			<h3>Tổng là {sum}</h3>
		</form>
	);
}
