<template>

    <div id="section1">


        <div id="main">
            <div id="mainleft">
                <ul>
                    <div class="headpicture"></div>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="" alt="">
                        <a href="#">Home</a>
                    </li>
                </ul>

            </div>
            <div id="mainright">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">
                <img src="../picture/f.jpg" alt="">


            </div>


        </div>
    </div>

</template>
<style scoped>
#section1 {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    /* position: relative; */
    /* background: linear-gradient(to right top, #c0fff2, #48f1d5); */
}




#main {
    display: flex;
    justify-content: center;
    align-items: end;
    /* width: 1200px;
    height: 600px; */

    margin: 35px 0;
    /* background-color: bisque; */

    overflow: hidden;

}

#mainleft {


    border-radius: 25px;
    overflow: hidden;
    margin-right: 25px;
    /* background-color: #426696; */
    /* margin-right: 20px; */
}

#mainleft>ul>div {

    width: 360px;
    height: 168px;
    background-color: rgb(142, 142, 43);
    border-radius: 0px;
    transition: background-color 0.5s ease-in-out, border-radius 1s ease-in-out;
}

#mainleft>ul>li {

    width: 360px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    background-color: aquamarine;
    border-radius: 0px;
    transition: background-color 0.5s ease-in-out, border-radius 1s ease-in-out;

}


#mainleft>ul>li:hover,
#mainleft>ul>div:hover {
    background-color: rgb(221, 236, 249);
    border-radius: 25px;
}

#mainright {
    width: 824px;
    height: 600px;
    display: inline;
    border-radius: 25px;
    overflow: hidden;
    background-color: chartreuse;
}

#mainright>img {
    width: 824px;
    height: 600px;
    transition: transform 1s cubic-bezier(0.17, 0.67, 0.48, 1.36);
    display: block;
}
</style>
<script>
export default {
    mounted() {
        const imgofsection1 = document.querySelectorAll("#mainright>img");
        const section1_mainleft_li = document.querySelectorAll("#mainleft>ul>*");

        Array.from(section1_mainleft_li).forEach(function (element, liindex) {
            element.addEventListener("mouseover", function () {
                Array.from(imgofsection1).forEach(img => {
                    img.style.transform = "translateY(" + (liindex * -100) + "%)";
                });
            });
        });

    }
}
</script>
