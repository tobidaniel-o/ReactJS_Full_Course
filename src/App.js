import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: "One half pound bag of Cocoa Covered Almonds Unsalted",
		},
		{
			id: 2,
			checked: false,
			item: "Item 2",
		},
		{
			id: 3,
			checked: false,
			item: "Item 3",
		},
	]);

	const [newItem, setNewItem] = useState("");

	const handleCheck = (id) => {
		const listItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		// addItem
		setNewItem("");
	};
	return (
		<div className="App">
			<Header title="Groceries List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<Content
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
