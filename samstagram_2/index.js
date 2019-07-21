
 $("#form1").submit(function(e) {
    e.preventDefault();

    var caption = document.getElementById("caption");
    var caption_text = caption.value;

    caption.value="";
    var x = document.createElement("img");
    x.style.width = "200px";
    var t = document.getElementById("link-input").value;
    x.src = t;
    addNewItem(x, caption_text);
    document.getElementById("link-input").value="";
                
            });

    function addNewItem(x, caption_text){
        var post = document.createElement("div");
        post.style.padding = "10px";
        post.style.width = "200px";
        post.style.height = "170px";
        post.style.overflow = "auto";
        post.style.margin = "20px";
        post.classList.add("post");
        var caption_text_elem = document.createElement("p");
        caption_text_elem.innerHTML = caption_text;
        var erase = document.createElement("img");
        erase.setAttribute ("src", "https://static.thenounproject.com/png/2222051-200.png");
        erase.style.height = "30px";
        erase.style.position = "absolute";
        erase.style.marginLeft = "170px";
        erase.style.zIndex = "1";
        erase.onclick = function(){remove()};;
        function remove() {
        	post.remove(post.selectedIndex);
        	erase.remove(erase.selectedIndex);
        	x.remove(x.selectedIndex);
        	caption_text_elem.remove(caption_text_elem.slectedIndex);
        }
        post.appendChild(erase);
        post.appendChild(x);
        post.appendChild(caption_text_elem);
        document.getElementById("container").appendChild(post);
    };


