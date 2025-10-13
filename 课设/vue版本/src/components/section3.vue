<template>
            <div id="section3" class="sectionthree">
            <div class="section3-main">
                <div class="section3-mainleft"></div>
                <div class="section3-mainright">
                    <button class="lbutton"> ⬅!
                    </button>
                    <ul class="mrimg">
                        <li class="shadow"><img src="/picture/a.jpg" ></li>
                        <li class="shadow"><img src="/picture/b.jpg" ></li>
                        <li class="shadow"><img src="/picture/c.jpg" ></li>
                        <li class="shadow"><img src="/picture/d.jpg" ></li>
                        <li class="shadow"><img src="/picture/e.jpg" ></li>
                        <li class="shadow"><img src="/picture/f.jpg" ></li>
                        <li class="shadow"><img src="/picture/g.jpg" ></li>
                        <li class="shadow"><img src="/picture/a.jpg" ></li>
                        <li class="shadow"><img src="/picture/a.jpg" ></li>


                        \
                        <!-- <img src="picture/s-1.jpg" alt=""> -->

                    </ul>
                    <button class="rbutton"> ➡!
                    </button>
                </div>

            </div>



        </div>
</template>
<script>
export default {
  mounted() {
    // 按钮控制图片的移动及隐现
    let section3_currentli = 0;
    let imgmove = 0;
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
        mrli[section3_currentli].classList.remove("shadow");
        console.log(section3_currentli);

        // 先加,再移动
        if (section3_currentli % 3 == 0) {
          imgmove -= 600;
          Array.from(mrli).forEach(function (li, index) {
            console.log(imgmove);
            li.style.transform = "translateX(" + (imgmove) + "px)";
          });
        }
      }
    });

    lbutton.addEventListener("click", function () {
      if (section3_currentli > 0) {
        // 先移动,再减
        if (section3_currentli % 3 == 0) {
          imgmove += 600;
          Array.from(mrli).forEach(function (li, index) {
            console.log(imgmove);
            li.style.transform = "translateX(" + (imgmove) + "px)";
          });
        }

        mrli[section3_currentli].classList.add("shadow");
        section3_currentli--;
        mrli[section3_currentli].classList.remove("shadow");
        console.log(section3_currentli);
      }
    });
  }
}
</script>
<style>
#section3 {

    width: 100%;
    height: 100vh;
    background-color: rgb(112, 34, 230);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

}

.section3-main {

 
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section3-mainleft {

    width: 480px;
    height: 600px;
    background-color: azure;

    margin: 0;
}

.section3-mainright {

    width: 700px;
    height: 600px;
    background-color: rgb(247, 247, 75);
    overflow: hidden;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* From www.lingdaima.com */
button {
    width: 50px;
    height: 40px;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    letter-spacing: .25px;
    line-height: normal;
    padding: 11px 24px;
    transition: background box-shadow 280ms ease;
}

button:hover {
    background: #F6F9FE;
    color: #174ea6;
}



.section3-mainright>.mrimg {
    display: flex;
    flex: 1;
    width: 600px;
    height: 600px;
    background-color: #56595f;
    overflow: hidden;
}

.section3-mainright>.mrimg>li {
    display: inline-block;
    position: relative;
    /* width: 190px;
    height: 600px; */
    margin: 0 4px;
    border: 1px solid rgb(255, 255, 255);
    transition: transform 0.5s ease-in-out;

}

.section3-mainright>.mrimg>li>img {

    width: 190px;
    height: 600px;
}



.section3-mainright>.mrimg>li.shadow::before {

    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(3, 3, 3);
    opacity: 0.5;
}

/* .section3-mainright>.mrimg>li.clear::before {

    opacity: 0;
} */
</style>    

