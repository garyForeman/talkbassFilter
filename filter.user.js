// ==UserScript==
// @name        TalkBass price filter
// @namespace   thegarebear75@gmail.com
// @description Filters TalkBass for sale threads based on price
// @include     http://www.talkbass.com/forums/for-sale*
// @version     1
// @grant       none
// ==/UserScript== 

//var input=document.createElement("input");
//input.type="button";
//input.value="Price Filter";
//input.onclick = showAlert;
//input.setAttribute("style", 
//"font-size:18px;position:absolute;top:120px;right:40px;");
//document.body.appendChild(input); 

$(document).ready(function(){
    var floatRegex = /\d+,?\d*(\.\d*)?/;

    var getInput = function(promptString){
        //Prompts user to enter a price than can be converted to a float. 
        //Returns the value of the input converted to a float. Handles 
        //incorrect input by asking the user for a new entry.
        var acceptableInput =  false;
        while(!acceptableInput){
            var priceString = prompt(promptString).match(floatRegex)[0]
                .replace(",", "");
            var priceVar = parseFloat(priceString);
            if (isNaN(priceVar)){
                alert("Invalid input!");
            }
            else{
                acceptableInput = true;
            };
        };
        return priceVar;
    };

    var getPrices = true;

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

    var filterType = function(){
        //Asks the user whether she would like a hard or soft filter to be 
        //used. The hard filter eliminates threads without listed prices and 
        //threads with prices that cannot be converted to floats. The soft 
        //filter keeeps these threads. Returns true if hard filter is chosen 
        //or false if soft filter is chosen
        var acceptableInput = false;
        var hardFilter = false;
        while(!acceptableInput){
            var filterString = prompt("Would you like to use a HARD or " +
                                      "SOFT filter?").toUpperCase();
            switch(filterString){
                case "HARD":
                    hardFilter = true;
                    acceptableInput = true;
                    break;
                case "SOFT":
                    hardFilter = false;
                    acceptableInput = true;
                    break;
                 default:
                    alert("Invalid input!");
                    break;
            };
        };
        return hardFilter;
    };

    var hardFilter = filterType();

    if(hardFilter){
        $('li:not(:has(.pairsInline))').remove();
        $('.pairsInline:not(:has(span))').parents('li').remove();
        $('li[class*=prefix4]').remove();
        $('li[class*=prefix6]').remove();
        $('li[class*=prefix7]').remove();
    };

    //class pairsInline indicates the line under the thread titles that
    //contain the Price and Location information. The price itself is located 
    //in the only 'span' decendent of pairsInline 
    var prices = $('.pairsInline').find('span').contents();

    for(var i = 0; i < prices.length; i++){
        price = prices[i].data.match(floatRegex);
        if(price){
            price = parseFloat(price[0].replace(",",""));
            if(price < priceLow || price > priceHigh){
                //each thread is indicated by an 'li' selector, 'li' is not 
                //used for any other purpose
                $(prices[i]).parents('li').remove();
            };
        }
        else if(hardFilter){
            $(prices[i]).parents('li').remove();
        };
    };
});
