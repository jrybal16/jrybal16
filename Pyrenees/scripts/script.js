/*
Student Name: Justin Haldeman
File Name: script.js
Today's Date: 11/02/2022
*/

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block"){
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}