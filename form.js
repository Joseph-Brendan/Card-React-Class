function form(){
    let formContainer = document.createElement("form")
    formContainer.classList.add("form")
    formContainer.append(inputGroup(), inputGroup(), inputGroup())
    return formContainer
}

function inputGroup(){
    let inputGroupDiv = document.createElement("div")
    inputGroupDiv.classList.add("input-group")

    let formLabel = document.createElement("label")
    formLabel.setAttribute("for", "code")
    formLabel.textContent = `Enter Tracking Code`

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("name", "code")
    input.setAttribute("id", "code")

    inputGroupDiv.append(formLabel, input)
    return inputGroupDiv
}

export default form