
 $("#form").submit(function(e) {
    e.preventDefault();
    //Appending the image to the div based on user url input
    var img = document.createElement("img");
    img.style.width = "500px";
    var src = document.getElementById("url").value;
    img.src = src;
    document.getElementById("url").value="";
    document.getElementById("photo").innerHTML = ""
    document.getElementById("photo").appendChild(img);

    //Appending the bio to the div based on user input
    var bio = document.getElementById("bio_input");
    var bio_text = bio_input.value;
    document.getElementById("bio_input").value="";
    var bio_text_elem = document.createElement("p");
    bio_text_elem.innerHTML = bio_text;
    document.getElementById("bio").innerHTML = "";
    console.log(document.getElementById("bio").childNodes);
    document.getElementById("bio").appendChild(bio_text_elem);

    //Appending the name to the div based on user input
    var name = document.getElementById("name");
    var name_text = name.value;
    document.getElementById("name").value="";
    var name_text_elem = document.createElement("p");
    name_text_elem.innerHTML = name_text;
    document.getElementById("proname").innerHTML = "";
    console.log(document.getElementById("proname").childNodes);
    document.getElementById("proname").appendChild(name_text_elem);
});