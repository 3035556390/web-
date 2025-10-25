<template>
    <div class="mk_container">
        <div class="mk_main">

            <div class="mk_div">
                <h3 class="mk_div_title">服务启停命令</h3>
                <div class="mk_div_content">

                    nginx -s quit //优雅停止<br>
                    nginx -s stop //立即停止<br>
                    nginx -s reload //重新加载配置文件<br>
                    nginx -s reopen //重新打开日志文件<br>

                    nginx -t //测试配置
                </div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title">反向代理</h3>
                <div class="mk_div_content">
                    nginx -s quit //优雅停止<br>
                    nginx -s stop //立即停止<br>
                    nginx -s reload //重新加载配置文件<br>
                    nginx -s reopen //重新打开日志文件<br>

                    nginx -t //测试配置<br>
                </div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title"> 负载均衡</h3>
                <div class="mk_div_content"></div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title"></h3>
                <div class="mk_div_content"></div>
            </div>
        </div>
    </div>

</template>
<script>
</script>
<style scoped>
.mk_container {

    display: flex;
    justify-content: center;
    align-items: center;

}

.mk_main {
    width: 70%;

    background-color: rgb(255, 243, 227);
}

.mk_div {
    width: 90%;
    margin: 50px auto;
}

.mk_div_title {

    /* background-color: aqua; */
    color: rgb(29, 105, 247);
    border-left: 3px solid #000;
    margin-bottom: 15px;
    /* border-radius: 5px; */
}

.mk_div_content {

    background-color: rgb(255, 255, 255);
    border-left: 3px solid #8d7c7c;
    /* border-radius: 5px; */
}
</style>