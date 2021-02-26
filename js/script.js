const counter = document.querySelector(".counter");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const input = document.querySelector("#input-number");
const header = document.querySelector("h1");

add.addEventListener("click", e => {
    const num = parseInt(counter.innerHTML) + parseInt(input.value);
    counter.innerHTML = num 
    changeColor(num);
    console.log(counter.innerHTML, input.value)
})

subtract.addEventListener("click", e => {
    const num = parseInt(counter.innerHTML) - parseInt(input.value);
    counter.innerHTML = num 
    changeColor(num);
    console.log(counter.innerHTML, input.value)

})

function changeColor(num) {
    if (num > 0) {
        counter.style.color = "lightgreen";
        header.style.color = "lightgreen";
    } else if (num < 0) {
        counter.style.color = "lightpink";
        header.style.color = "lightpink";
    } else if (num == 0) {
        counter.style.color = "lightblue";
        header.style.color = "lightblue";
    }
}
