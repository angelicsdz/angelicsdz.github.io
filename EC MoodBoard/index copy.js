
$("#form_id").submit(function(e) {
    e.preventDefault();
    var x = document.createElement("img");
    x.style.height = "200px";
    var t = document.getElementById("link_input").value;
    x.src = t;
    document.body.appendChild(x);
    console.log("EC");
    x.onclick = function(){myFunction()};;
    function myFunction() {
    	x.remove (x.selectedIndex);
    }
});
