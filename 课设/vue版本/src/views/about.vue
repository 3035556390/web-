<template>
    <div class="about">
        <musicplayer></musicplayer>
        <nav class="about-top">
            <h1>About me</h1>

            <h2>个人简介,个人简介</h2>

        </nav>
        <div class="about-main">
            <div class="news"></div>
            <div class="about-maintop">

                <div class="left">
                    <div>ww</div>
                    <div class="jilu">
                        <div class="jilu-item"></div>
                        <div class="jilu-item"></div>
                        <div class="jilu-item"></div>



                    </div>
                </div>
                <div class="right">

                </div>
            </div>


            <div class="about-mainleft">
                <div v-for="model in paginatedModels" :key="model.id" @:click="markdownreturn(model.path)"
                    class="about-model">
                    <div class="model-imgcontainer"> <img v-bind:src="model.imgsrc" alt=""></div>
                    <div class="model-content">{{ model.content }}</div>
                </div>

                <div class="pagebutton">
                    <button v-on:click="about_modelcurrentpage--" :disabled="about_modelcurrentpage <= 1">
                        上一页</button>
                    <span>{{ about_modelcurrentpage }} / {{ totalPages }}</span>

                    <button v-on:click="about_modelcurrentpage++"
                        v-bind:disabled="about_modelcurrentpage >= about_models.length / pagesize">下一页</button>

                </div>

            </div>
            <div class="about-mainright">mainright</div>
        </div>

    </div>

</template>
<script setup>
import ajpg from '../picture/a.jpg';
import bjpg from '../picture/b.jpg';
import cjpg from '../picture/c.jpg';
import djpg from '../picture/d.jpg';
import ejpg from '../picture/e.jpg';
import fjpg from '../picture/f.jpg';
import musicplayer from '../components/musicplayer.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';


const about_models = ref([{
    id: 1,
    imgsrc: ajpg,
    content: '111',
    path: '/markdown/markdownOfNginx'

},
{
    id: 2,
    imgsrc: bjpg,
    content: '222',
    path: '/markdown/markdownOfAlgorithm'
},
{
    id: 3,
    imgsrc: cjpg,
    content: '333',
    path: '/markdown/markdownOfVue'
},
{
    id: 4,
    imgsrc: djpg,
    content: '444'
},
{
    id: 5,
    imgsrc: ejpg,
    content: '555'
},
{
    id: 6,
    imgsrc: fjpg,
    content: '666'
},
{
    id: 7,
    imgsrc: ajpg,
    content: '777'
},
{
    id: 8,
    imgsrc: ajpg,
    content: '888'
},
{
    id: 9,
    imgsrc: ajpg,
    content: '999'

}, {


    id: 10,
    imgsrc: ajpg,
    content: '10'

}
])


//页面控制
const about_modelcurrentpage = ref(1);
const pagesize = 8;


const paginatedModels = computed(() => {
    const start = (about_modelcurrentpage.value - 1) * pagesize
    const end = start + pagesize
    return about_models.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(about_models.value.length / pagesize)
})

//返回笔记
const router = useRouter();
const markdownreturn = (path) => {

    router.push(path)

}

</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-image: linear-gradient(to top, #2294fe 0%, #39f5cc 100%);
}

.about-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

h1 {
    color: white;
    font-size: 50px;
}

h2 {
    white-space: nowrap;
    /* 防止文字换行 */

    width: 100px;
    height: 35px;
    overflow: hidden;
    border-right: 2px solid white;
    animation: about-top-h2 1.5s ease-in-out alternate infinite;
}

@keyframes about-top-h2 {

    0% {
        width: 0;
    }

    80% {
        width: 200px;
    }

    100% {
        width: 200px;
        opacity: 1;
    }
}

.about-main {


    width: 1200px;

}

.about-maintop {
    width: 100%;
    height: 300px;
    background-color: bisque;
    display: flex;

    justify-content: start;
    align-items: center;

}

.news {

    width: 100%;
    height: 40px;
    background-color: white;
    border-radius: 20px;
}

.about-maintop>.left {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
}

.about-maintop>.left> :nth-child(1) {
    /* 你的样式 */
    width: 100%;
    height: 70%;
    background-color: #2294fe;
}

.about-maintop>.left> :nth-child(2) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30%;
    background-color: rgb(236, 225, 223);
}

.jilu {

    display: flex;
}

.jilu-item {
    border: 1px solid black;
    flex: 1;
    border-radius: 8px;
    transition: flex 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.jilu-item:hover {

    flex: 3;
}



.about-maintop>.right {

    width: 50%;
    height: 100%;
    background-color: tomato;
}

.about-mainleft {

    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr); */
    width: 850px;
    height: 1200px;
    flex-wrap: wrap;
    overflow: hidden;

}

.about-model {
    border-radius: 10px;
    width: 400px;
    height: 250px;
    background-color: lightblue;
    margin: 10px;
    overflow: hidden;

}

.model-imgcontainer {
    width: 100%;
    height: 70%;
    overflow: hidden;
}

.model-imgcontainer>img {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    transition: transform 0.5s ease;
}



.about-model:hover .model-imgcontainer>img {

    transform: scale(1.1);
}

.pagebutton {
    width: 100%;
    height: 30px;
    background-color: lightgreen;
    display: flex;
    justify-content: center;

}

.pagebutton>button {
    background-color: yellow;
}

.about-mainright {
    display: inline;
    width: 100px;
    height: 100%;
    background-color: rgb(187, 122, 38);
    float: right;
}

/* 
audio {

    width: 400px;
    height: 50px;
    background-color: turquoise;
} */
</style>