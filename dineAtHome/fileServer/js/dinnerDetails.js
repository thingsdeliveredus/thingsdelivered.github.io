function getThaliDetail() {
	var thali = 
	{
		"detail"	: "One order of thali includes 4 Roti, Potato Shak, Dal (toor), Bhat enough for one person",
		"cost"		: "7.99",
		"costType"	: "per person"
	}
	return thali;
}

function getCustomizedDinnerDetail() {
	var items = [
		{
			"count"		: "0",
			"item"		: "Roti",
			"image"		: "http://www.supremequalityfoods.com.au/images/products/product-chapati-wholemeal.jpg",
			"message"	: "Made from stoneground wholemeal flour, traditionally known as atta with thin layer of ghee on top",
			"cost"		: "1.00",
			"costType"	: "per pack (3 roties)",
			"orderPreText"	: "Order",
			"orderPostText"	: "packs"
		},
		
		{
			"count"		: "0",
			"item"		: "Potato Shak",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person"
		}
	];
	return items;
	
}
