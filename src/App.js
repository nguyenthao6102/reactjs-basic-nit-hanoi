import "./App.css";
import AddForm from "./Components/AddForm";
import DolaToVND from "./Components/DolaToVND";
import DSSinhVien from "./Components/DSSinhVien";
import MouseClick from "./Components/MouseClick";

function App() {
	const arrSV = ["Ngọc Anh", "Vũ Hà", "Thu Hương"];
	return (
		<div className="App">
			<MouseClick />
			<DolaToVND />
			<AddForm />
			<DSSinhVien data={arrSV} />
		</div>
	);
}

export default App;
