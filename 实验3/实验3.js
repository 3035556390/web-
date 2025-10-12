const elements = document.getElementsByTagName("dd");

// Array.from(elements).forEach(element => {
//     element.addEventListener("click", function () {
//         Array.from(elements).forEach(el => {
//             el.classList.remove("active");
//         })
//         element.classList.add("active");
//     })
// })
const li = document.querySelectorAll(".daohang>ul>li");

Array.from(li).forEach(element => {
    element.addEventListener("mouseover", function () {
        const dl = this.querySelector("dl");

        if (dl) { dl.style.maxHeight = "500px" }
        const dd = dl.querySelectorAll("dd");
        dd.forEach((el, index) => {
            el.style.opacity = "1"
            el.style.transitionDelay = `${0.1 * (index + 1)}ms`;

        })


    })
    element.addEventListener("mouseout", function () {
        const dl = this.querySelector("dl");
        if (dl) { dl.style.maxHeight = "0" }
        const dd = dl.querySelectorAll("dd");
        dd.forEach(el => {
            el.style.opacity = "0"
            el.style.transitionDelay = "0s"
        })
    })


})

