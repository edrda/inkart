import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParceirosView from '../views/ParceirosView.vue'
import ServicosView from '../views/ServicosView.vue'
import SobreView from '../views/SobreView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import ContatoView from '../views/ContatoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    { path: '/parceiros', name: 'Parceiros', component: ParceirosView },
    { path: '/servicos', name: 'Servicos', component: ServicosView },
    { path: '/sobre', name: 'Sobre', component: SobreView },
    { path: '/galeria', name: 'Galeria', component: GaleriaView },
    { path: '/contato', name: 'Contato', component: ContatoView },
  ],
})

export default router
