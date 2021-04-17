import React, { useState } from "react";

export default function ThemSinhVien(props) {
	const [ten, setTen] = useState("");
	// hàm xử lý khi nhập vào input
	function handleChange(e) {
		setTen(e.target.value);
	}
	// hàm xử lý khi submit
	function handleSubmit(e) {
		props.handleSubmit(ten);
		setTen("");
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={ten} onChange={handleChange} />
			<input type="submit" value="Thêm sinh viên" />
		</form>
	);
}
