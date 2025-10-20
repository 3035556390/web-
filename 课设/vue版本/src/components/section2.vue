<template>
    <div id="section2" class="sectiontwo">
        <div class="section2-main">
            <div class="section2-maintop">
                <ul>
                    <li><a href="#">个人资料</a></li>
                    <li><a href="#">个人图片</a></li>
                    <li><a href="#">个人技能</a></li>
                    <li><a href="#">个人QQ</a></li>
                    <li><a href="#">个人微信</a></li>
                    <li><a href="#">杂七杂八</a></li>
                </ul>

            </div>
            <div class="section2-mainbodycontainer">
                <div class="section2-mainbody">
                    <div class="section2-mbl">
                        <p>*</p>
                        <p>姓名：张三</p>
                        <p>性别：男</p>
                        <p>生日：1999-01-01</p>
                        <p>爱好：篮球、足球、乒乓球</p>
                        <p>星座：双子座</p>
                        <p>八嘎</p>
                        <p>八嘎</p>
                        <p>*</p>
                    </div>
                    <div class="section2-mbr">
                        <img src="../picture/f.jpg" alt="">
                    </div>


                </div>
                <div class="section2-mainbody">
                    <div class="section2-mbl">
                        <p>*</p>
                        <p>姓名：</p>
                        <p>性别：</p>
                        <p>生日：1-01</p>
                        <p>爱好：足球、乒乓球</p>
                        <p>星座：座</p>
                        <p>八嘎</p>
                        <p>八嘎</p>
                        <p>*</p>
                    </div>
                    <div class="section2-mbr">
                        <img src="../picture/g.jpg" alt="">
                    </div>


                </div>
            </div>

        </div>


    </div>
</template>


<style>
#section2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    /* background-color: rgb(247, 101, 16); */
    overflow: hidden;

    /* color: transparent; */
    opacity: 1;
}

.section2-main {

    width: 1202px;
    height: 600px;

    /* margin: 0 auto; */
    border: 1px solid #161313;


}

.section2-maintop>ul {
    margin: 0;
    padding: 0;
    list-style: none;

}

.section2-maintop>ul>li {
    position: relative;
    display: inline;
    float: left;
    margin: 0;
    background-color: antiquewhite;
    transition: background-color 0.5s ease-in-out;
}

.section2-maintop>ul>li>a {
    display: block;
    text-align: center;
    line-height: 100px;
    width: 200px;
    height: 100px;
}

.section2-maintop {
    overflow: hidden;
    /* 或者 clearfix 方法 */
}

/* 当元素设置 overflow: hidden 时，会触发创建块级格式化上下文（Block Formatting Context,
BFC）： 
 .section2-maintop {
    overflow: hidden;
    创建BFC
}

2. BFC 的特性 BFC 具有以下关键特性： 包含浮动元素：BFC 会自动包含其内部的所有浮动元素 计算高度时考虑浮动元素：BFC 在计算自身高度时会将浮动元素考虑在内 与浮动元素不重叠：BFC 区域不会与浮动元素重叠 */


.section2-mainbody {
    position: absolute;
    /* right: auto; */
    opacity: 0;
    transition: opacity 1s ease-in-out;
    display: flex;
    justify-content: center;
}

.section2-mbl>p {

    width: 240px;
    height: 55.5px;
    margin-left: 30px;
    clear: both;
    line-height: 55.5px;
    background-color: bisque;
}

.section2-mbr {
    width: 930px;
    height: 500px;
    background-color: aqua;
    /* clear: both; */
}

.section2-mbr>img {
    width: 90%;
    height: 90%;
    border-radius: 25px;
    margin: 25px 5%;
}
</style>


<script>
export default {
    mounted() {
        //section2


        const section2_maintop_li = document.querySelectorAll(".section2-maintop>ul>li");
        const section2_mainbodys = document.querySelectorAll(".section2-mainbody");

        //初始化显示第一个主体
        section2_mainbodys[0].style.opacity = "1";

        //导航栏控制主体的隐现透明度
        Array.from(section2_maintop_li).forEach(function (currentli, currentindex) {

            currentli.addEventListener("click", function (e) {
                e.preventDefault();
                // 点击导航栏颜色变化
                Array.from(section2_maintop_li).forEach((li, index) => {
                    li.style.backgroundColor = currentindex === index ? "white" : "antiquewhite";
                });



                //图片隐现
                Array.from(section2_mainbodys).forEach(function (mainbody) {
                    mainbody.style.opacity = "0";

                });

                setTimeout(() => {
                    section2_mainbodys[currentindex].style.opacity = "1";

                }, 500);


            });

        });
    }

}


</script>
