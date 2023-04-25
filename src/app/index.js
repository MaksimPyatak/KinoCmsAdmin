import { createApp } from 'vue' //!!!!!
import { createPinia } from 'pinia'

import App from '@/App.vue'
import { router } from './providers'
//import './styles/admin-lte-style.scss'
import './index.scss';

export const app = createApp(App).use(createPinia()).use(router)