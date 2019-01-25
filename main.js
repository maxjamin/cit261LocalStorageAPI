
function addUser() {
	document.getElementById("test").innerHTML = "";
	var user = document.getElementsByName("username")[0].value;
	var email = document.getElementsByName("email")[0].value;

	console.log(email);

	//check to see if browser supports local storage
	if(typeof(Storage) !== "undefined") {
		console.log("code of Storage");

		if(user != "" && email != "")
		{	
			localStorage.setItem(user,email);
			document.getElementById("test").innerHTML = "Added user: " + user + 
			" with email: " + email;
		}
		else
		{
			document.getElementById("test").innerHTML = "Error: please enter a User ";
		}

	} else {
		console.log("Web Storage not supported\n");
	}

}



function findUser() {
	document.getElementById("test01").innerHTML = "";

	var user = document.getElementsByName("findUsr")[0].value;
	var email = document.getElementsByName("findEmail")[0].value;

	//check to see if browser supports local storage
	if(typeof(Storage) !== "undefined") {
		console.log("code of Storage");

		var emailLocal = localStorage.getItem(user);
		//var em = localStorage.getItem(email);

		//test if inputs are blank, and if user input email == local email.
		if((user != "" && email != "") && (emailLocal == email))
		{		

			document.getElementById("test01").innerHTML = "Found user: "
			+ user + " with email: " + localStorage.getItem(user);
		}
		else 
		{
			document.getElementById("test01").innerHTML = "Error: user not found";
		}

	} else {
		console.log("web Storage not supported\n");
	}


}

function listArray() {
	console.log("In listArray\n");

	//
	var books = [
		{
			'id' : 1,
			'title' : 'The Odyssey',
			'Author' : 'Homer'
		},
		{
			'id' : 2,
			'title' : 'Gullivers Travels',
			'Author' : 'Homer'
		},
		{
			'id' : 3,
			'title' : 'To Kill a Mockingbird',
			'Author' : 'Harper Lee'
		},
		{
			'id' : 4,
			'title' : 'Moby Dick',
			'Author' : 'Herman Melville'
		}
	];
	
	//convert the object into a string for the api
	localStorage.setItem("books", JSON.stringify(books));

	//retrieve the data and convert it back into a javascript object
	var books = localStorage.getItem("books");
	books = JSON.parse(books);

	console.dir(books);

	var outputs = "";
	for(i= 0; i < books.length; i++)
	{
		outputs += "Title: " + books[i].title + " ID: " + books[i].id 
		+ " Author: " + books[i].Author + "<br>";
	}


	document.getElementById("test02").innerHTML = outputs;
}


function localStorageArray() {

	var booksarray = ['The Odyssey', 'Gullivers Travels', 
	'To Kill a Mockingbird', 'Moby Dick'];

	//convert the object into a string for the api
	localStorage.setItem("booksarray", JSON.stringify(booksarray));

	var books = localStorage.getItem("booksarray");
	books = JSON.parse(books);

	var outputs = "";
	for(i= 0; i < books.length; i++)
	{
		outputs += "Title: " + books[i] + "<br>";
	}


	document.getElementById("test03").innerHTML = outputs;

}