(() => {
    const input = document.querySelector("input");
    const table = document.querySelector("table");
    const button = document.getElementsByTagName("button");
    input.onclick = function(e){
        table.className = "show";
    }
    for(var i = 0;i < button.length;i++){
        button[i].onclick = function(e){
            input.value += e.target.innerText;
        }
    }
})();   