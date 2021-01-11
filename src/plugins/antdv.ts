import {
  Button,
  Card,
  Tag,
  Form,
  Input,
  Layout,
  Menu,
  message,
} from 'ant-design-vue'
import { App } from 'vue'

// 防止弹出大量消息
message.config({
  duration: 2,
  maxCount: 1,
})

const appConfig = {
  $message: message,
}

/**
 * @description 手动注册 antd-vue 组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */
export default {
  install(app: App) {
    app.config.globalProperties = {
      ...app.config.globalProperties,
      ...appConfig,
    }

    app
      .use(Button)
      .use(Card)
      .use(Tag)
      .use(Form)
      .use(Input)
      .use(Layout)
      .use(Menu)
  },
}
