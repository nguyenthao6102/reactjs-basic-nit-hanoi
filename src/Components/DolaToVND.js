import React, { useState } from "react";

export default function DolaToVND() {
	const [dola, setDola] = useState(0);
	function hanldChange(e) {
		setDola(e.target.value);
	}

	// Hàm sử lý sự kiện chuyển đổi
	function toVnd(dola) {
		let vnd = Intl.NumberFormat().format(dola * 23075);
		return vnd;
	}
	return (
		<div className="doLaToVnd">
			<input type="text" value={dola} onChange={hanldChange} />
			<p>
				{dola} Đô la = {toVnd(dola)} VNĐ
			</p>
		</div>
	);
}
