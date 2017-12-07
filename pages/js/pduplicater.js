document.getElementById('pbutton').onclick = pduplicate;
var i = 0;
var poriginal = document.getElementById('pduplicater');

function pduplicate() {
    var clone = poriginal.cloneNode(true); // "deep" clone
    clone.id = "pduplicetor" + ++i; // there can only be one element with an ID
    poriginal.parentNode.appendChild(clone);
	
	
	
	var pdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var PDData = pdir[Math.floor(Math.random() * pdir.length)];
	var PAData = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var PTData = Math.floor(Math.random() * (86 - 66 + 1)) + 66;
	
	document.getElementById("PhoneDirection").innerHTML = PDData + ' Direction';
	document.getElementById("PhoneAngle").innerHTML = PAData + ' Mph';
	document.getElementById("PhoneTemp").innerHTML = PTData + ' fahrenheit';
	
}