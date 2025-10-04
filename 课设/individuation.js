//all
const sections = document.querySelectorAll(".container>*");
const container = document.querySelector(".container");
let currentindex = 0;
let isScrolling = false;

container.addEventListener("wheel", function (e) {
    e.preventDefault();
    if (isScrolling) return;

    if (e.deltaY > 0) {
        if (currentindex < sections.length - 1) {
            currentindex++;
            sectionremove();
        }
    } else {
        if (currentindex > 0) {
            currentindex--;
            sectionremove();
        }
    }
}, { passive: false });

function sectionremove() {
    isScrolling = true;
    const translateValue = -currentindex * 100;

    Array.from(sections).forEach(function (section, index) {
        // console.log(index + " " + currentindex);
        section.style.transform = `translateY(${translateValue}vh)`;
    });

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}


const nav_li = document.querySelectorAll("#section1>nav>ul>li");

Array.from(nav_li).forEach(function (li, index) {
    li.addEventListener("click", function () {
        console.log(index);
        currentindex = index;
        Array.from(sections).forEach(function (section) {
            section.style.transform = `translateY(${currentindex * -100}vh)`;
        });

    })

})



// 初始化：所有section堆叠在一起
// document.addEventListener('DOMContentLoaded', function () {
//     Array.from(sections).forEach(function (section) {
//         section.style.transform = `translateY(0vh)`;
//     });
// });

//section1
const imgofsection1 = document.querySelectorAll("#mainright>img");
const section1_mainleft_li = document.querySelectorAll("#mainleft>ul>*");

Array.from(section1_mainleft_li).forEach(function (element, liindex) {
    element.addEventListener("mouseover", function () {
        Array.from(imgofsection1).forEach(img => {
            img.style.transform = "translateY(" + (liindex * -100) + "%)";
        });
    });
});