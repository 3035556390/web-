






const imgofsection1 = document.querySelectorAll("#mainright>img");

const section1_mainleft_li = document.querySelectorAll("#mainleft>ul>*");

Array.from(section1_mainleft_li).forEach(function (element, liindex) {

    element.addEventListener("mouseover", function () {
        Array.from(imgofsection1).forEach(img => {
            img.style.transform = "translateY(" + (liindex * -100) + "%)";

        })

    })
});
