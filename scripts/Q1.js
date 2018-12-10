var namesS = ["Daniel Inouye", "Stanley Akita", "Spark Matsunaga", "Sueo Fujii", "Harry Kamikawa",
              "Moe Yunemura", "Saburo Akiyama", "George Akiyamai",
              "Tom Kawaguchi", "Lt. Allan Ohata", "Rudy Tokiwa", "Etsuo Kahashi", "Tokuichi Matsubara"];
var pointsS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var opinionsS = [0,0,0,0,0];

if(sessionStorage.length != 0)
{
	sessionStorage.clear();
}
sessionStorage.setItem('names', JSON.stringify(namesS));
sessionStorage.setItem('points', JSON.stringify(pointsS));
sessionStorage.setItem('opinions', JSON.stringify(opinionsS));

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
}

function choice1Points()
{
	points[1] += 1;
	points[2] += 1;
	points[3] += 1;
	points[4] += 1;
	points[11] += 1;
	points[9] += 1;
	updateSession();
}

function choice2Points()
{
	points[5] += 1;
	points[6] += 1;
	points[7] += 1;
	points[10] += 1;
	points[8] += 1;
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
