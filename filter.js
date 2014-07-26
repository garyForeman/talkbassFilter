var floatRegex = '[0-9]+[,]?[0-9]*[.][0-9]*|[0-9]+[,]?[0-9]*'

var getInput = function(promptString){
    var acceptableInput =  false;
    while(!acceptableInput){
	var priceString = prompt(promptString).match(floatRegex)[0]
	    .replace(",", "");
	var priceVar = parseFloat(priceString);
	if (isNaN(priceVar)){
	    alert("Invalid input!")
	}
	else{
	    acceptableInput = true;
	};
    };
    return priceVar;
};

priceLow = getInput("Enter the lowest price you wish to see.");
priceHigh = getInput("Enter the highest price you wish to see.");

var prices = $('.pairsInline').find('span').contents()

for(var i = 0; i < prices.length; i++){
    price = prices[i].data.match(floatRegex);
    if(price){
	price = parseFloat(price[0].replace(",",""));
	if(price < priceLow || price > priceHigh){
	    $(prices[i]).parents('li').remove()
	};
    };
}
