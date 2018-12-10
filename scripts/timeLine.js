var names = JSON.parse(sessionStorage.getItem('names'));
var points = JSON.parse(sessionStorage.getItem('points'));
var opinions = JSON.parse(sessionStorage.getItem('opinions'));

function main()
{
	var BWBP = "";
	var BWAP = "";
	var DWAR = "";
	var DWEW = "";
	var AW = "";

	if(opinions[0] == 1)
	{
		BWBP = "Identified strongly with being valued as an American";
	}
	else if (opinions[0] == 2)
	{
		BWBP = "Neutral/Uncaring towards feeling valued as an American";
	}
	else
	{
		BWBP = "Felt undervalued and alienated as an American";
	}

	if(opinions[1] == 1)
	{
		BWAP = "Identified strongly with being valued as an American";
	}
	else if (opinions[1] == 2)
	{
		BWAP = "Neutral/Uncaring towards feeling valued as an American";
	}
	else
	{
		BWAP = "Felt undervalued and alienated as an American";
	}

	if(opinions[2] == 1)
	{
		DWAR = "Identified strongly with being valued as an American";
	}
	else if (opinions[2] == 2)
	{
		DWAR = "Neutral/Uncaring towards feeling valued as an American";
	}
	else
	{
		DWAR = "Felt undervalued and alienated as an American";
	}

	if(opinions[3] == 1)
	{
		DWEW = "Identified strongly with being valued as an American";
	}
	else if (opinions[3] == 2)
	{
		DWEW = "Neutral/Uncaring towards feeling valued as an American";
	}
	else
	{
		DWEW = "Felt undervalued and alienated as an American";
	}

	if(opinions[4] == 1)
	{
		EW = "Identified strongly with being valued as an American";
	}
	else if (opinions[4] == 2)
	{
		EW = "Neutral/Uncaring towards feeling valued as an American";
	}
	else
	{
		EW = "Felt undervalued and alienated as an American";
	}

	var buttonDisplay = document.querySelector('#timeLine');
    var item = document.createElement('p');
	item.innerHTML = "<p class=\"question\"> Before The War and Pearl Harbor: " + BWBP + " </p>"+
        "<p class=\"question\"> Before The War and After Pearl Harbor: " + BWAP + " </p>" +
        "<p class=\"question\"> During the War, Rome: " + DWAR + " </p>" + 
        "<p class=\"question\"> During the War, Towards the End: " + DWEW + " </p>" + 
        "<p class=\"question\"> After The War: " + EW + " </p>";
		//update opinion and pts
    buttonDisplay.appendChild(item);


//<button type="button" id="continue" onclick="location.href='#'">Continue</button>

}

function updateSession()
{
	sessionStorage.clear();
	sessionStorage.setItem('names', JSON.stringify(names));
	sessionStorage.setItem('points', JSON.stringify(points));
	sessionStorage.setItem('opinions', JSON.stringify(opinions));
	//testSession();
}

// function testSession()
// {
// 	var n = JSON.parse(sessionStorage.getItem('names'));
// 	var p = JSON.parse(sessionStorage.getItem('points'));
// 	var o = JSON.parse(sessionStorage.getItem('opinions'));

// 	var testDisplay = document.querySelector('.test');
// 	for (i=0; i < n.length; i++) {
// 		var item = document.createElement('li');
// 		item.innerHTML = "<p>" + n[i] + "</p>";
// 		testDisplay.appendChild(item)
// 	}
// 	console.log(n);
// 	console.log(p);
// 	console.log(o);
// }
