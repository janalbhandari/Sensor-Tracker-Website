
//check cluster / individual

//if cluster pull, all  .js files inside fitbit will be pulled and random data is sent to user

$(function() {

	var pdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var PDData = pdir[Math.floor(Math.random() * pdir.length)];
	var PAData = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var PTData = Math.floor(Math.random() * (86 - 66 + 1)) + 66;
	
	document.getElementById("PhoneDirection").innerHTML = PDData + ' Direction';
	document.getElementById("PhoneAccel").innerHTML = PAData + ' Mph';
	document.getElementById("PhoneTemp").innerHTML = PTData + ' fahrenheit';
});