import { App } from 'vue'
import antd from './antd'

export default {
  install(app: App) {
    app.use(antd)
  },
}
