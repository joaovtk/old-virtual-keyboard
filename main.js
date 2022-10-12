(() => {
    const input = document.querySelector("input");
    const table = document.querySelector("table");
    const button = document.getElementsByTagName("button");
    var isCaps = false;
    input.onclick = function(e){
        table.className = "show";
    }
    for(var i = 0;i < button.length;i++){
        button[i].onclick = function(e){
            var words = e.target.innerText;
            if(isCaps){
                words = words.toUpperCase();
                console.log(words);
            }
            if(e.target.innerText == "⌫"){
                input.value = input.value.slice(0, -1);
            }else if(e.target.innerText == "⯅"){
                if(isCaps){
                    isCaps = false;
                    e.target.style.color = "#000";
                }else {
                    isCaps = true;
                    e.target.style.color = "red";
                }
            }else if(e.target.innerText == "-"){
                input.value += " ";
            }
            else {
                input.value += words;
            }
            console.log(isCaps);
        }
    }
})();   