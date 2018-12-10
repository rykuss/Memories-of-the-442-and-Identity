var names = JSON.parse(sessionStorage.getItem('names'));
var points = JSON.parse(sessionStorage.getItem('points'));
var opinions = JSON.parse(sessionStorage.getItem('opinions'));

function main()
{
	maxPts = Math.max.apply(null, points);
	related = names[0];
	for(var i=0; i<names.length; i++)
	{
		if(maxPts == points[i])
		{
			related = names[i];
			break;
		}
	}

	var buttonDisplay = document.querySelector('#choiceHolder');
    var item = document.createElement('p');
	if(related == "Daniel Inouye")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'daniel.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Stanley Akita")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'stanley.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Spark Matsunaga")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'spark.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Sueo Fujii")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'sueo.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Harry Kamikawa")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'harry.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Moe Yunemura")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'moe.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Saburo Akiyama")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'saburo.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "George Akiyamai")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'george.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Tom Kawaguchi")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'tom.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Lt. Allan Ohata")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'allan.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Rudy Tokiwa")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'rudy.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Etsuo Kohashi")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'etsuo.html\'\">Continue</button>";
		//update opinion and pts
	}
	else if(related == "Tokuichi Matsubara")
	{
		item.innerHTML = "<button type=\"button\" id=\"continue\" onclick=\"location.href=\'tokuichi.html\'\">Continue</button>";
		//update opinion and pts
	}
    buttonDisplay.appendChild(item);
    updateSession();


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
