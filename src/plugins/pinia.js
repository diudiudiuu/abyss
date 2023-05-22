import { createPinia } from 'pinia'

const pinia = createPinia()

export default (app) => {
  app.use(pinia)
}
