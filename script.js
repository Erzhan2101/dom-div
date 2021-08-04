const wrapper = document.querySelectorAll(".wrapper div")

function obj() {
    wrapper.forEach(div => {
        div.addEventListener("click", (event) => {
            event.target.classList.add("bg-div")
        })
    })
}

obj()