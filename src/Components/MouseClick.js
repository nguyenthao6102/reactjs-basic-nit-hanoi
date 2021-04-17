import React, { useEffect, useState } from "react";

export default function MouseClick() {
	const [click, setClick] = useState(0);

	// Gọi khi nội dung được render: (mouting)
	useEffect(() => {
		console.log("click: " + click);
		return () => {
			// dọn dẹp
		};
	}, [click]);

	// Hàm xử lý đếm số click
	function incrementClick() {
		setClick(click + 1);
	}
	return (
		<div className="mouseClick">
			<h2>{click}</h2>
			<button onClick={incrementClick}>CLICK VÀO ĐÂY!</button>
		</div>
	);
}
