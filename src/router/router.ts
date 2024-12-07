import { createMemoryHistory, createRouter } from 'vue-router'
// @ts-ignore
import Scene from '../view/Scene.vue'
// import Login from '../view/login/login.vue'

const routes:any = [
  { path: '/', component: Scene },
  { path: '/Scene', component: Scene }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router