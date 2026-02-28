const inputBox = document.getElementById("input-box")
const listcontaner = document.getElementById("list-contaner")

function addTask(){

    if(inputBox.value === ''){

        alert("YOU MUST WRITE SOMETHING");
    }
    else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontaner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listcontaner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontaner.innerHTML);
}

function showTask(){
    listcontaner.innerHTML = localStorage.getItem("data");
}

showTask();