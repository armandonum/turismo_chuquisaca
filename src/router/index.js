// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/pages/home.vue'

const routes = [

    {
        path: '/',
        name: 'home',
        component: home,
    },
        {
        path: '/home',
        name: 'home2',
        component: home,
    },
   

    // {
    //     path: '/departamentos',
    //     name: 'bolivia',
    //     component: BoliviaView,
    // }

    // Agrega más rutas aquí
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router