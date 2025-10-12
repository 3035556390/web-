//滚轮滚动整体板块
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
        else {
            currentindex = 0;
            sectionremove();
        }
    }
    else {
        if (currentindex > 0) {
            currentindex--;
            sectionremove();
        }
    }
}, { passive: false });





// 平滑滚动到指定元素
// function smoothScrollTo(element, duration = 800) {
//     // 获取目标元素距离顶部的距离
//     const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
//     // 获取当前滚动位置
//     const startPosition = window.pageYOffset;
//     // 计算滚动距离
//     const distance = targetPosition - startPosition;
//     // 记录动画开始时间
//     const startTime = performance.now();

//     // 动画函数
//     function animation(currentTime) {
//         // 计算已过去的时间比例
//         const elapsedTime = currentTime - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);

//         // 缓动函数：使滚动先慢后快再慢
//         const easeProgress = progress < 0.5
//             ? 4 * progress * progress * progress
//             : 1 - Math.pow(-2 * progress + 2, 3) / 2;

//         // 计算当前滚动位置并应用
//         window.scrollTo(0, startPosition + distance * easeProgress);

//         // 未完成则继续下一帧
//         if (progress < 1) {
//             requestAnimationFrame(animation);
//         }
//     }

//     // 启动动画
//     requestAnimationFrame(animation);
// }

// // 处理所有锚点链接
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         // 阻止默认跳转行为
//         e.preventDefault();

//         // 获取目标ID（从href属性中提取）
//         const targetId = this.getAttribute('href');

//         // 处理回到顶部的情况（href="#"）
//         if (targetId === '#') {
//             smoothScrollTo(document.documentElement);
//             return;
//         }

//         // 获取目标元素
//         const targetElement = document.querySelector(targetId);

//         // 如果目标元素存在，则滚动到该元素
//         if (targetElement) {
//             smoothScrollTo(targetElement);
//         }
//     });
// });


//点击导航栏滚动整体板块
const nav_li = document.querySelectorAll("#section1>nav>ul>li");

Array.from(nav_li).forEach(function (li, index) {
    li.addEventListener("click", function (e) {
        e.preventDefault();


        currentindex = index;
        sectionremove();


    })

})
//滚动方法
function sectionremove() {
    isScrolling = true;
    const translateValue = (-currentindex) * 100;
    console.log(currentindex, translateValue);
    Array.from(sections).forEach(function (section) {

        section.style.transform = `translateY(${translateValue}vh)`;
    });

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}



// 初始化：所有section堆叠在一起
// document.addEventListener('DOMContentLoaded', function () {
//     Array.from(sections).forEach(function (section) {
//         section.style.transform = `translateY(0vh)`;
//     });
// });



//section1
//板块1图片的滚动
const imgofsection1 = document.querySelectorAll("#mainright>img");
const section1_mainleft_li = document.querySelectorAll("#mainleft>ul>*");

Array.from(section1_mainleft_li).forEach(function (element, liindex) {
    element.addEventListener("mouseover", function () {
        Array.from(imgofsection1).forEach(img => {
            img.style.transform = "translateY(" + (liindex * -100) + "%)";
        });
    });
});




//section2


const section2_maintop_li = document.querySelectorAll(".section2-maintop>ul>li");
const section2_mainbodys = document.querySelectorAll(".section2-mainbody");

//初始化显示第一个主体
section2_mainbodys[0].style.opacity = "1";

//导航栏控制主体的隐现透明度
Array.from(section2_maintop_li).forEach(function (currentli, currentindex) {

    currentli.addEventListener("click", function () {

        //点击导航栏颜色变化
        Array.from(section2_maintop_li).forEach(function (li, index) {
            if (currentindex === index) {
                li.style.backgroundColor = "white";
            }
            else {
                li.style.backgroundColor = "antiquewhite";
            }
        });



        //图片隐现
        Array.from(section2_mainbodys).forEach(function (mainbody, bodyindex) {
            mainbody.style.opacity = "0";

        });

        setTimeout(() => {
            Array.from(section2_mainbodys).forEach(function (mainbody, bodyindex) {
                if (bodyindex === currentindex) {
                    mainbody.style.opacity = "1"; // 显示对应内容
                }
            });
        }, 500);


    });

});




//section3

//按钮控制图片的移动及隐现
var section3_currentli = 0;
var imgmove = 0;
var section3_imginthree = 0;
const rbutton = document.querySelector(".section3-mainright>.rbutton");
const lbutton = document.querySelector(".section3-mainright>.lbutton");
const mrli = document.querySelectorAll(".section3-mainright>.mrimg>li ");

if (mrli.length > 0) {
    mrli[0].classList.remove("shadow");
}


rbutton.addEventListener("click", function () {
    if (section3_currentli < mrli.length - 1) {



        mrli[section3_currentli].classList.add("shadow");
        section3_currentli++;
        mrli[section3_currentli].classList.remove("shadow")
        console.log(section3_currentli);

        //先加,再移动
        if (section3_currentli % 3 == 0) {
            imgmove -= 600;
            Array.from(mrli).forEach(function (li, index) {

                console.log(imgmove)
                li.style.transform = "translateX(" + (imgmove) + "px)";
            });
        }


    }

});

lbutton.addEventListener("click", function () {
    if (section3_currentli > 0) {

        //先移动,再减
        if (section3_currentli % 3 == 0) {
            imgmove += 600;
            Array.from(mrli).forEach(function (li, index) {
                console.log(imgmove)
                li.style.transform = "translateX(" + (imgmove) + "px)";
            });

        }


        mrli[section3_currentli].classList.add("shadow");

        section3_currentli--
        mrli[section3_currentli].classList.remove("shadow")
        console.log(section3_currentli);



    }

});