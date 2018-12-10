var names = JSON.parse(sessionStorage.getItem('names'));
var points = JSON.parse(sessionStorage.getItem('points'));
var opinions = JSON.parse(sessionStorage.getItem('opinions'));

function main()
{
	var died = false;
	chanceNumber = Math.floor((Math.random() * 10) + 1);
	if(chanceNumber < 6)
	{
		died = true;
	}

	var buttonDisplay = document.querySelector('#choiceHolder');
    var item = document.createElement('p');
	if(died == true)
	{
		item.innerHTML = "<button type=\"button\" id=\"choice1\" onclick=\"location.href=\'random3Died.html\'\">Worth it</button> " + 
                         "<button type=\"button\" id=\"choice2\" onclick=\"location.href=\'random3Died.html\'\">Outraged</button>\" ";
		//update opinion and pts
	}
	else
	{
		item.innerHTML = "<button type=\"button\" id=\"choice1\" onclick=\"location.href=\'random3NCH.html\'\">Worth it</button> " + 
                         "<button type=\"button\" id=\"choice2\" onclick=\"location.href=\'random3NCH.html\'\">Outraged</button>\" ";
		//update opinion and pts
	}
    buttonDisplay.appendChild(item)

    if(died == false) 
    {
		document.querySelector('#choice1').addEventListener('click', function(event) {
			choice1Points();
		});
		document.querySelector('#choice2').addEventListener('click', function(event) {
			choice2Points();
		});
    }
    else
    {
		document.querySelector('#choice1').addEventListener('click', function(event) {
			choice1PointsDIED();
		});
		document.querySelector('#choice2').addEventListener('click', function(event) {
			choice2PointsDIED();
		});    	
    }
}

function choice1Points()
{
	points[11] += 2;
	points[2] += 2;
	points[5] += 1;
	points[9] += 2;
	opinions[3] = 1;


	updateSession();
}

function choice2Points()
{
	points[11] += 1;
	points[2] += 1;
	points[5] += 1;
	points[9] += 1;
	opinions[3] = 3;
	updateSession();
}

function choice1PointsDIED()
{
	points[11] += 1;
	points[2] += 1;
	points[5] += 11;
	points[9] += 1;
	opinions[3] = 1;
	updateSession();
}

function choice2PointsDIED()
{
	opinions[3] = 3;
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
