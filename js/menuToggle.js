//Create a button and give it an ID of "hamburgerBtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("closed");
}
var action = document.getElementById('hamburgerBtn');
action.onclick = toggleMenu; 
