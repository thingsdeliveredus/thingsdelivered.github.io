function getNextOrderDateDay() {
	var nextOrder = new Date('2017-08-17');
	var todaysDate = new Date();

	if (nextOrder == null || nextOrder <= todaysDate){
		nextOrder = "tomorrow"
	}

	return nextOrder;
}
