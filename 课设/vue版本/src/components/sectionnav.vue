<template>

    <div class="section_nav">
        <ul>
            <li><a href="#" data-index="0">section1</a></li>
            <li><a href="#" data-index="1">section2</a></li>
            <li><a href="#" data-index="2">section3</a></li>
            <li><a href="#" data-index="3">section4</a></li>
            <li><a href="#" data-index="4">section5</a></li>
        </ul>
    </div>
</template>

<script>



</script>
<style>
.section_nav {

    position: fixed;
    z-index: 10000;
    top: 25%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    /* background: linear-gradient(to right top, rgb(192, 255, 242), rgb(72, 241, 213)) 0% 0% / 100%; */
    background-color: rgba(0, 0, 0, 0.2);
}


.section_nav>ul>li>a {
    display: block;
    width: 70px;
    height: 60px;
    background-color: #426696;
    color: #ffffff;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-bottom 0.5s ease-in-out;
}

.section_nav>ul>li>a:hover {
    background-color: #ffffff;
    color: #426696;
    border-bottom: 5px solid #426696;
}
</style>