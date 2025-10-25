<template>


    <div class="container">
        <background />
        <sectionnav class="section_nav" />
        <Section1 class="section" />
        <section2 class="section" />
        <Section3 class="section" />

        <Section4 class="section" />

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
import sectionnav from '../components/sectionnav.vue'
import { ConfigProvider } from 'vue-amazing-ui'

export default {
    components: {
        background,
        sectionnav,
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
        const sections = document.querySelectorAll(".container>.section");
        const container = document.querySelector(".container");
        console.log('Container:', document.querySelector(".container"));

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

        //点击导航栏滚动整体板块
        // const sectionnav_links = document.querySelectorAll(".section_nav ul li a");

        //点击导航栏滚动整体板块
        const sectionnav_links = document.querySelectorAll(".section_nav ul li a");

        Array.from(sectionnav_links).forEach(function (link, index) {
            link.addEventListener("click", function (e) {
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
                console.log(translateValue);
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

}

.container {


    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;


    /* align-items: center;  */
}



.container>.section {
    /* width: 100%; */
    height: 100vh;
    transition: transform 0.7s cubic-bezier(0.17, 0.67, 0.48, 1.36);
}
</style>