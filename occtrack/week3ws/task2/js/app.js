document.querySelector("#push").onclick = function(){
    if(document.querySelector("#inputText input").value.length == 0){
        alert("Please enter the value")
    }
    else{
        document.querySelector("#tasks").innerHTML +=
        `
        <div class="task">
            <span id="taskName">
            ${document.querySelector("#inputText input").value}
        </div>
        <button class="delete">Delete</button>
        `;
    }
    let livetask = document.querySelectorAll(".delete");
    for(let i=0; i<livetask.length; i++){
        livetask[i].onclick = function(){
            this.parentElement.remove();
        }
    }
    let tasks = document.querySelectorAll(".task");
    for(let i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('done');
        }
    }
    document.querySelector("#inputText input").value = "";
}
