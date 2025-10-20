import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// 导入 vue-amazing-ui 的解析器
import { VueAmazingUIResolver } from 'vue-amazing-ui'

export default defineConfig({
  // 保留原有的 base 和 publicPath 配置
  base: './',
  publicPath: './', // 注意：vite 中推荐用 base，publicPath 是兼容 webpack 的写法，两者选一个即可

  // 合并 plugins 配置（原有 vue() + 新增的 Components 插件）
  plugins: [
    vue(), // 原有的 vue 插件
    Components({ // 新增的按需导入插件
      resolvers: [
        VueAmazingUIResolver({
          cjs: false
        })
      ]
    })
  ]
})



