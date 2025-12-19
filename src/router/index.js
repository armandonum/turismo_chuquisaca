// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [

    {
        path: '/',
        name: 'home',
        component: DefaultLayout,
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