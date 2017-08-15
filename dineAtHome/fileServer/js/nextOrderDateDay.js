function getNextOrderDateDay() {
	var nextOrder = "August 15 , 2017";
	var todaysDate = new Date();

	if (nextOrder == null || nextOrder <= todaysDate){
		nextOrder = "tomorrow"
	}

	return nextOrder;
}
