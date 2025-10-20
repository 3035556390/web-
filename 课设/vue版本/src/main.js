import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Button, Tag, ConfigProvider } from 'vue-amazing-ui'
import 'vue-amazing-ui/es/button/Button.css'
import 'vue-amazing-ui/es/tag/Tag.css'
import router from './router'

const app = createApp(App)
app.use(Button).use(Tag).use(ConfigProvider).use(router)

app.mount('#app')