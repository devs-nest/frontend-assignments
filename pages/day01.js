import { useState } from "react";
import { ModeToggle } from "../components/ModeToggle";
import Head from 'next/head'
import { Navbar } from "../components/Navbar";
import { FoodItem } from "../components/FoodItem";
import foodItems from "../data/foodItems";
import { Order_Delivery } from "../components/Order_Delivery";
import { Offers_News } from "../components/Offers_News";
import { Footer } from "../components/Footer";

const day01 = () => {
	const [showFinalFrom, setShowFinalFrom] = useState(true);
	return (
		<div className=''>
			<Head>
				<title>Day01 - HTML : Doctype, Head, HTML, Title, Tags</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<ModeToggle select={showFinalFrom} setSelect={setShowFinalFrom} />
			{showFinalFrom && <h1 className='text-center '>HTML : Doctype, Head, HTML, Title, Tags</h1>}

			{/* navbar */}
			{showFinalFrom && <h2 className="bt-2">Task01 - Navbar Section</h2>}
			<Navbar showFinalFrom={showFinalFrom} />

			{/* Carousel Elements */}
			{showFinalFrom && <h2 className="bt-2">Task02 - Carousel Elements Section</h2>}
			{
				foodItems.map((foodItem, index) => (
					<FoodItem key={index} foodItem={foodItem} showFinalFrom={showFinalFrom} />
				))
			}

			{/* order and delivery */}
			{showFinalFrom && <h2 className="bt-2">Task03 - Order and Delivery Section </h2>}
			<Order_Delivery showFinalFrom={showFinalFrom} />

			{/* order and delivery */}
			{showFinalFrom && <h2 className="bt-2">Task04 -Offers and News </h2>}
			<Offers_News showFinalFrom={showFinalFrom} />

			{/* Footer */}
			{showFinalFrom && <h2 className="bt-2">Task05 -Footer </h2>}
			<Footer showFinalFrom={showFinalFrom} />
		</div>
	)
};

export default day01;
