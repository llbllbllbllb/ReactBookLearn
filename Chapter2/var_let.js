var div, container = document.getElementById("container");

for(let i=0; i<5; i++){
    div = document.createElement('div');
    div.className = "item";
    div.onclick = function() {
        alert("this is box #" + i);

    }
    container.appendChild(div);
}