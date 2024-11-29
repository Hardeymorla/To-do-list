document.addEventListener("DOMContentLoaded", (e) => {
    const inputBox = document.querySelector("#inputbox");
    const button = document.querySelector("button");
    const listContent = document.querySelector(".list-content");

    function getInput() {
        if (inputBox.value === "") {
            alert("Enter an Item");
        }else{
            let li = document.createElement("li");
            let b = document.createElement("b");
            b.innerHTML = inputBox.value;
            li.appendChild(b);
            listContent.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }
    button.addEventListener("click", getInput);
    listContent.addEventListener("click", (e) => {
        if (e.target.tagName === "B") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });
    function saveData(){
        localStorage.setItem("data", listContent.innerHTML);
    }
    function showTask(){
        listContent.innerHTML = localStorage.getItem("data");
    }
    showTask();
});