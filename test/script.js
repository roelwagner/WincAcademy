const buttons = [...document.querySelectorAll(".button")];
const list = document.querySelector("#list");

const getLandenLijst = () => {
    const countrieList = randomPersonData.map(person => {
        list.appendChild(document.createElement("li")).textContent = person.region;
    })
}

const something = (event) => {
    list.innerHTML = "";
    const button = event.target.textContent;
    switch(button){
        case "Landenlijst":
            getLandenLijst();
            break;
        default:
            console.log(button);
            break;
    }
}

buttons.forEach(button => button.addEventListener("click", something));