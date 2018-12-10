var names = JSON.parse(sessionStorage.getItem('names'));
var points = JSON.parse(sessionStorage.getItem('points'));
var opinions = JSON.parse(sessionStorage.getItem('opinions'));

function main()
{
	var enlist = false;
	chanceNumber = Math.floor((Math.random() * 10) + 1);
	if(chanceNumber < 6)
	{
		enlist = true;
	}

	var buttonDisplay = document.querySelector('#buttonHolder');
    var item = document.createElement('p');
	if(enlist == true)
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'random1EH.html\'\">Continue</button>";
		points[9] += 1;
		opinions[0] = 1;
	}
	else
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'random1NEH.html\'\">Continue</button>";
		points[1] += 1;
		points[2] += 1;
		points[3] += 1;
		points[4] += 1;
		points[11] += 1;
		points[5] += 1;
		opinions[0] = 2;
	}
    buttonDisplay.appendChild(item)


	document.querySelector('#continue').addEventListener('click', function(event) {
		continueGame();
	});
}

function continueGame()
{

	updateSession();
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
