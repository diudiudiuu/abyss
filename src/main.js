import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import usePinia from '@/plugins/pinia'
import useAntd from '@/plugins/antd'


const app = createApp(App)

usePinia(app)
useAntd(app)
app
    .use(router)
    .mount('#app')