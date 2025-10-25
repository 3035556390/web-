<template>
    <div class="mk_container">
        <div class="mk_main">


            <div class="mk_div">
                <h3 class="mk_div_title">分治法</h3>
                <div class="mk_div_content">
                    1. **问题可分解性**原问题可以分解为若干个规模较小、相互独立且与原问题结构相似的子问题。这是分治法的基础，只有可分解才能通过递归处理。 <br>
                    2. **子问题同构性**子问题与原问题具有相同的性质，即子问题的解法可复用原问题的解法（递归的核心）。例如，排序问题中，子数组的排序方法与原数组的排序方法一致。<br>
                    3. **子问题可独立求解**子问题之间没有依赖关系，可独立求解。若子问题相互关联（如存在重叠子问题），分治法可能不是最优选择（动态规划更适合）。<br>
                    4. **解的可合并性**子问题的解可以合并为原问题的解，且合并操作的时间复杂度不能过高（否则会抵消分治带来的效率提升）。例如，归并排序中，两个有序子数组的合并操作是高效的（O (n)）。<br>
                    5. **规模阈值存在**当问题规模缩小到一定程度时，可直接求解（无需继续分解）。这个阈值是递归的终止条件，确保算法能在有限步骤内结束。<br>
                </div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title">归并排序</h3>

                <div class="mk_div_content">

                    nginx -s quit //优雅停止<br>
                    nginx -s stop //立即停止<br>
                    nginx -s reload //重新加载配置文件<br>
                    nginx -s reopen //重新打开日志文件<br>

                    nginx -t //测试配置

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
            <jingdutiao></jingdutiao>
        </div>
    </div>

</template>
<script>
import jingdutiao from "../components/jingdutiao.vue";
import paperbackground from "../components/paperbackground.vue";
export default {
    components: {
        jingdutiao,
        paperbackground
    },
};

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