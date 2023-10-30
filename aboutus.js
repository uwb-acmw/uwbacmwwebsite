// aboutus.js

// Get all elements with class "collapsible"
var coll = document.getElementsByClassName("collapsible");

// Loop through the elements and add a click event listener to each one
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // Toggle the content when the button is clicked
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}



