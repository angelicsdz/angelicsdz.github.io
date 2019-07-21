
$("#form_id").submit(function(e) {
    e.preventDefault();

var x = document.createElement("img");
x.style.height = "200px";
var t = document.getElementById("link_input").value;
x.src = t;
document.getElementById("container").appendChild(x);
});
