var floatRegex = /\d+,?\d*(\.\d*)?/

var getInput = function(promptString){
    //Prompts user to enter a price than can be converted to a float. Returns
    //the value of the input converted to a float. Handles incorrect input
    // by asking the user for a new entry.
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

var getPrices = true

while(getPrices){
    priceLow = getInput("Enter the lowest price you wish to see.");
    priceHigh = getInput("Enter the highest price you wish to see.");
    if(priceLow > priceHigh){
	alert("Your low price was greater than your high price!");
    }
    else{
	getPrices = false;
    };
};

//class pairsInline indicates the line under the thread titles that
//contain the Price and Location information. The price itself is located in
//the only 'span' decendent of pairsInline 
var prices = $('.pairsInline').find('span').contents();

for(var i = 0; i < prices.length; i++){
    price = prices[i].data.match(floatRegex);
    if(price){
	price = parseFloat(price[0].replace(",",""));
	if(price < priceLow || price > priceHigh){
	    //each thread is indicated by an 'li' selector, 'li' is not used for
	    //any other purpose
	    $(prices[i]).parents('li').remove()
	};
    };
};
