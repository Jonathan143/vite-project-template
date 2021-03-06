import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style(name) {
            return `ant-design-vue/es/${name}/style/index.css`
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src') + '/',
    },
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue'],
  },
  css: {
    preprocessorOptions: {
      //这里注意，键名是scss不是sass！一字之差能让你折腾好久
      scss: {
        //这里写你想导入全局scss变量的路径
        //这里注意只能写相对路径，alias貌似在css中不会生效
        additionalData: "@import './src/theme/variables.scss';",
      },
    },
  },
})
