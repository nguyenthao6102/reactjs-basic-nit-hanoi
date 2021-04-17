import React, { useState } from "react";
import ThemSinhVien from "./ThemSinhVien";
import SinhViens from "./SinhViens";

export default function DSSinhVien(props) {
	const [dulieu, setDulieu] = useState(props.data);
	function themSVMoi(ten) {
		setDulieu([...dulieu, ten]);
	}
	return (
		<div>
			<ThemSinhVien handleSubmit={themSVMoi} />
			<SinhViens data={dulieu} />
		</div>
	);
}
