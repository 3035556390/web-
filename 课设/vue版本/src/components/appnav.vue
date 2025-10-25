<template>
    <div class="app_nav" :class="{ 'show': isShow }">
        <ul>
            <!-- 使用 router-link 替代原生 a 标签 -->
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/service">Services</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router' // 引入 useRouter

const appNavMouseHeight = 50
const isShow = ref(false)
const mouseY = ref(0)


const navhandleMouseMove = (e) => {
    mouseY.value = e.clientY
    navcheckMousePos()
}

const navcheckMousePos = () => {
    isShow.value = mouseY.value < appNavMouseHeight
}

onMounted(() => {
    document.addEventListener('mousemove', navhandleMouseMove)
})

onUnmounted(() => {
    document.removeEventListener('mousemove', navhandleMouseMove)
})
</script>


<style>
.app_nav {


    position: fixed;
    z-index: 100;
    top: -60px;
    left: 20%;
    width: 800px;
    height: 0px;
    line-height: 60px;
    text-align: center;
    /* overflow: hidden; */
    /* background: linear-gradient(to right top, rgb(192, 255, 242), rgb(72, 241, 213)) 0% 0% / 100%; */
    opacity: 0.2;
}




.app_nav>ul>li {
    /* width: 70px; */

    display: inline-block;
    /* color: aliceblue; */
    /* background-color: antiquewhite; */
}

.app_nav>ul>li>a {
    display: block;
    width: 100px;
    height: 60px;
    background-color: #426696;
    color: #ffffff;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-bottom 0.5s ease-in-out;
}

.app_nav>ul>li>a:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #426696;
    border-bottom: 3px solid #426696;
}

.show {

    transform: translateY(50px);
    transition: transform 0.5s ease-in-out;
}
</style>