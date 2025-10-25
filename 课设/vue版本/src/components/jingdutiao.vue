<template>
    <div><img src="../浪漫文字雨/a.jpg" alt="动图"></div>

</template>
<script>
</script>
<style scoped>
div {
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-bottom: 6px palegreen solid;

    animation: aaa auto linear;
    animation-timeline: scroll();

}

img {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;

}

@keyframes aaa {
    0% {
        width: 50px;
    }

    100% {
        width: 100%;
    }

}
</style>
