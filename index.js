const form = document.getElementById("form")
const uncheckList = document.querySelector(".uncheck-todo")
const checkList = document.querySelector(".check-todo")
// const selectionPriority = document.getElementById("select_priority")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userInput = event.target[0].value;
    const userInputDate = event.target[1].value;
    const priority = event.target[2].value;
    console.log(priority)
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", checktask)
    const p = document.createElement("p")
    p.innerText = userInput;

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("delete-button")
    button.addEventListener("click", (event)=>{
        const li_Parent = event.target.parentElement;
        li_Parent.remove()
    })

    const pDate = document.createElement("p")
    pDate.innerText = `Due Date: ${userInputDate}`;
    li.classList.add("task-li",priority)
    li.appendChild(checkbox)
    li.appendChild(p)
    li.appendChild(pDate)
    li.appendChild(button)

    uncheckList.appendChild(li)
    event.target.reset()
})

function checktask(event){
    const li = event.target.parentElement
    const audio = new Audio("./logo-transparent-139678.mp3")
    if(event.target.checked){
        checkList.appendChild(li)
        audio.play()
    }
    else{
        uncheckList.appendChild(li)
    }
}