function getThaliDetail() {
	var thali = 
	{
		"count"		: "0",
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
			"name"		: "Roti",
			"image"		: "http://www.supremequalityfoods.com.au/images/products/product-chapati-wholemeal.jpg",
			"message"	: "Made from stoneground wholemeal flour, traditionally known as atta with thin layer of ghee",
			"cost"		: "2.00",
			"costType"	: "per pack (4 roties)",
			"orderPreText"	: "Order",
			"orderPostText"	: "packs"
		},
		
		{
			"count"		: "0",
			"name"		: "Potato Shak",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "3.00",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person"
		},
		
		{
			"count"		: "0",
			"name"		: "Dal",
			"image"		: "http://www.vegrecipesofindia.com/wp-content/uploads/2014/11/gujarati-dal-recipe-3.jpg",
			"message"	: "Toor dal boiled and cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person"
		},
		
		{
			"count"		: "0",
			"name"		: "Bhat (Rice)",
			"image"		: "http://kindersay.com/files/images/rice.png",
			"message"	: "Boiled rice",
			"cost"		: "1.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person"
		}
	];
	return items;
	
}

function getLunchThaliDetail() {
	var thali = 
	{
		"count"		: "0",
		"name"		: "Bataka Poha",
		"detail"	: "Potato, penutes and poha shallow fried in spices",
		"image"		: "http://www.rkmp.co.in/sites/default/files/Poha%20%28ashwita.com%29.jpg",
		"cost"		: "3.99",
		"costType"	: "per person"
	}
	return thali;
}
