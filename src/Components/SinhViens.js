import React from "react";

export default function SinhViens(props) {
	const danhSachSV = props.data;
	const sinhViens = danhSachSV.map((sv, index) => <li key={index}>{sv}</li>);
	return <ul>{sinhViens}</ul>;
}
