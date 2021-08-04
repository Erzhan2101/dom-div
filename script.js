// const result = document.querySelectorAll(".wrapper div")
// const wrapper = document.querySelector(".wrapper")

const wrapper = document.querySelectorAll(".wrapper div")
const color = ["black", "red", "blue", "green" , "bg-div"]
//1 вариант
// wrapper.forEach((div) => {
//     div.addEventListener("click", () => {
//         wrapper.forEach((el) =>{
//             el.classList.remove("bg-div")
//         })
//         div.classList.add("bg-div")
//     })
// })

//2 вариант

// wrapper.addEventListener("click", (event) => {
//     if(event.target.classList[0] !== "wrapper"){
//         const random = Math.floor(Math.random() * 5)
//         result.forEach((el) => el.removeAttribute("class"))
//         event.target.classList.add(color[random])
//     }
// })


wrapper.forEach((el, idx) => {
    el.addEventListener("click", () => {
        const random = Math.floor(Math.random() * 5)
        wrapper.forEach((el) => el.removeAttribute("class"))
        el.classList.add(color[random])
    })
})