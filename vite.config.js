import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      vueJsx()
    ],
    resolve : {
        alias:{
            '@': resolve(__dirname, 'src')//设置别名
        },
        extensions: ['.js', '.vue', '.json'],
    },
    server: {
        port:4000,//启动端口
        open: true,
        proxy: {
            '/api': 'https://randomuser.me'//代理网址
        },
        cors:true
    }
})
