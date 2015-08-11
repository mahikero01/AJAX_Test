//1) Create an XMLHTTP Request Object
var xhr = new XMLHttpRequest();
//2) Create a callback function
xhr.onreadystatechange = function () {
	if ( xhr.readyState === 4 && xhr.status === 200 ) {
		//where the data will be shown
		document.getElementById('show').innerHTML = xhr.responseText;
		
	}
};
//3) Open a request
//get info source
xhr.open('GET', 'side.html');
//4) Send the request
xhr.send();
