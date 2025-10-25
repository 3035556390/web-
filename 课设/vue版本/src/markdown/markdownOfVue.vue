<template>
    <div class="mk_container">
        <div class="mk_main">

            <div class="mk_div">
                <h3 class="mk_div_title">vue项目的创建</h3>
                <div class="mk_div_content">
                    # 安装Vue脚手架<br>
                    npm install -g @vue/cli<br>
                    # 或使用Vite（推荐）<br>
                    npm create vite@latest<br>

                    # 按照提示选择Vue模板，创建完成后<br>
                    cd 项目目录<br>
                    npm install # 安装依赖（包括vue和@arco-design/web-vue）<br>
                    npm run dev # 启动开发服务器<br>
                </div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title">vue项目结构</h3>
                <div class="mk_div_content">
                    项目名/ <br>
                    ├── public/ # 静态资源（不会被打包处理） <br>
                    ├── src/ <br>
                    │ ├── assets/ # 图片、样式等资源（会被打包）<br>
                    │ ├── components/ # 可复用组件（如 Button、Card）<br>
                    │ ├── views/ # 页面级组件（如 Home、About）<br>
                    │ ├── router/ # 路由配置（index.js）<br>
                    │ ├── store/ # 状态管理（Pinia）<br>
                    │ ├── utils/ # 工具函数（如请求封装、日期格式化）<br>
                    │ ├── App.vue # 根组件<br></br>
                    │ └── main.js # 入口文件<br></br>
                    ├── .gitignore # Git 忽略文件<br>
                    ├── index.html # 入口 HTML<br></br>
                    ├── package.json # 项目依赖配置<br></br>
                    └── vite.config.js # Vite 配置<br></br>
                </div>
            </div>
            <div class="mk_div">
                <h3 class="mk_div_title"> vue指令</h3>
                <div class="mk_div_content">
                    | `v-text` | 无 | 更新元素的 `textContent`（类似插值 `{{}}`，但会覆盖元素原有内容）。 | <br>
                    | ----------- | ---- | ------------------------------------------------------------ | <br>
                    | `v-html` | 无 | 更新元素的 `innerHTML`（注意：可能导致 XSS 攻击，谨慎使用）。 | <br>
                    | `v-show` | 无 | 根据表达式的真假值，通过 `display` CSS 属性控制元素显示 / 隐藏（始终渲染）。 | <br>
                    | `v-if` | 无 | 根据表达式的真假值，条件性渲染元素（不满足时会销毁元素）。 | <br>
                    | `v-else` | 无 | 配合 `v-if` 使用，当 `v-if` 条件不满足时渲染（必须紧邻 `v-if`）。 | <br>
                    | `v-else-if` | 无 | 配合 `v-if` 使用，多条件判断（必须紧邻 `v-if` 或 `v-else-if`）。 | <br>
                    | `v-for` | 无 | 基于源数据循环渲染列表（语法：`item in items`，需绑定 `key`）。 |
                    | `v-on` | `@` | 绑定事件监听器（如点击、输入等），支持修饰符（如 `.stop`、`.prevent`）。 |
                    | `v-bind` | `:` | 动态绑定属性（如 `src`、`class`、`style` 等），可绑定对象或数组。 |
                    | `v-model` | 无 | 在表单元素上创建双向数据绑定（适用于 `input`、`select`、`textarea` 等）。 |
                    | `v-pre` | 无 | 跳过元素及其子元素的编译过程（用于显示原始插值语法 `{{}}`）。 |
                    | `v-cloak` | 无 | 用于隐藏未编译的插值表达式，直到 Vue 实例编译完成（需配合 CSS 使用）。 |
                    | `v-once` | 无 | 元素和组件只渲染一次，后续数据变化不会重新渲染（优化性能）。 |

                </div>
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
export default {
    components: {
        jingdutiao,
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