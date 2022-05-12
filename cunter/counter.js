// const add = document.querySelector(".add");
// const miner = document.querySelector(".miner");
// const reset = document.querySelector(".reset");
// const counter = document.querySelector("p");
// let counter = 0;
// add.addEventListener("click", (e) => {

//     counter.textContent = ++counter;
// })
// miner.addEventListener("click", (e) => {

//     counter.textContent = --counter;
// })
// reset.addEventListener("click", (e) => {


//     counter.textContent = 0;

// })


// second
let count = 0;
const counter = document.querySelector("p");
const btn = document.querySelectorAll(".btn");
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("add")) ++count;
        else if (classList.contains("miner")) --count;
        else count = 0;
        if (count >= 0) counter.style.color = "green"
        else counter.style.color = "red"
        counter.textContent = count;
    })
})