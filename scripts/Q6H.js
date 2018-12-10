var names = JSON.parse(sessionStorage.getItem('names'));
var points = JSON.parse(sessionStorage.getItem('points'));
var opinions = JSON.parse(sessionStorage.getItem('opinions'));

function main()
{
	document.querySelector('#choice1').addEventListener('click', function(event) {
		choice1Points();
	});
	document.querySelector('#choice2').addEventListener('click', function(event) {
		choice2Points();
	});
	document.querySelector('#choice3').addEventListener('click', function(event) {
		choice3Points();
	});
}

function choice1Points()
{
	points[0] += 15;
	points[2] += 1;
	updateSession();
}

function choice2Points()
{
	points[1] += 1;
	points[11] += 1;
	points[9] += 1;
	updateSession();
}

function choice3Points()
{
	points[4] += 1;
	points[3] += 1;
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
