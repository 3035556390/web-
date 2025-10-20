<template>


    <div class="container">
        <background />
        <Section1 />
        <section2 />
        <Section3 />

        <section4 />

        <!-- <Teleport to="body">
            <div style="position: fixed; top: 20px; right: 20px; z-index: 9999;">
                <Button type="primary">主题按钮</Button>
                <Tag color="primary">主题标签</Tag>
            </div>
        </Teleport> -->
    </div>


</template>

<script>
import background from './background.vue'
import Section1 from '../components/section1.vue'
import Section2 from '../components/section2.vue'
import Section3 from '../components/section3.vue'
import Section4 from '../components/section4.vue'
import Section5 from '../components/section5.vue'
import { ConfigProvider } from 'vue-amazing-ui'

export default {
    components: {
        background,
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        ConfigProvider

    },
    data() {
        return {
            theme: { // 无需 TypeScript 类型注解（.js 文件）
                common: {
                    primaryColor: '#10f920'
                }
            }
        }
    },
    mounted() {


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



    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    /* box-sizing: border-box; */
    /* scroll-behavior: smooth; */
}

.container {


    width: 99vw;
    height: 100vh;


    position: relative;
    /* overflow: hidden; */


    /* align-items: center;  */
}



.container>* {
    /* width: 100%;
    height: 100vh; */
    transition: transform 0.7s cubic-bezier(0.17, 0.67, 0.48, 1.36);
}
</style>