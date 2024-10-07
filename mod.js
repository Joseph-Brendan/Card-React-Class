let body = document.getElementById("body")
import form from "./form.js"

function mainContainer(){
    let mainContainerDiv = document.createElement("div")
    mainContainerDiv.classList.add("container")
    body.append(mainContainerDiv)
    mainContainerDiv.append(form())
}
mainContainer()