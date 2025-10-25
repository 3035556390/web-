<template>


    <div class="musicplayer">
        <span class="musicpicture"><img src="../picture/b.jpg" alt=""></span>
        <span musicplayer-center>
            <div class="musicname">
                <p>let in all out</p>
            </div>
            <div class="musicbutton">
                <button class="musicbtn"> <img src="../picture/musiclbtn.png" alt=""></button>
                <button class="musicbtn"> <img src="../picture/musicopen.png" alt=""></button>
                <button class="musicbtn"> <img src="../picture/musicrbtn.png" alt=""></button>
                <button class="musicbtn"> <img src="../picture/musicnoise.png" alt=""></button>
            </div>
        </span>

    </div>
</template>
<script>
</script>
<style>
.musicplayer {
    position: absolute;
    right: 0;
    display: flex;
    /* justify-content: start; */
    align-items: center;
    width: 400px;
    height: 80px;
    background-color: rgb(146, 186, 211);
}

.musicplayer>span {
    margin-top: 20px;
    margin-left: 10px;
}

.musicpicture img {

    width: 60px;
    height: 60px;
    border-radius: 50%;
    animation: musicpicturerotate 10s linear infinite;
}

.musicname {
    margin-top: 5px;
    width: 150px;
    height: 30px;
    /* background-color: white; */
    overflow: hidden;
    border-radius: 10px;
}

.musicname>p {

    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    animation: musicnamemove 5s linear infinite;
}



.musicbtn {
    border: none;
    background: transparent;
    margin: 15px 15px;
}

.musicbtn>img {

    width: 20px;
    height: 20px;
    border-radius: 50%;
}

@keyframes musicpicturerotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes musicnamemove {

    0% {
        transform: translateX(0);

    }

    50% {
        transform: translateX(-120%);
        /* 10%时间内移动到容器内 */
    }

    50.01% {
        transform: translateX(130%);
        /* 中间80%时间保持在容器内 */
    }

    100% {
        transform: translateX(0%);
        /* 最后10%时间移出容器左侧 */
    }
}
</style>