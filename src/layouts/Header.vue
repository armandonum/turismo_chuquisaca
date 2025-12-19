<template>
    <header class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div class=" bg-black flex justify-end text-white items-center h-8 pr-80"> <i class="pi pi-facebook p-2"></i>   <i class="pi pi-whatsapp p-2"></i>  <i class="pi pi-twitter p-2"></i>  <i class="pi pi-instagram p-2"></i></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

            <div class="flex justify-between items-center  ">

                <nav class="hidden md:flex font-bold items-center space-x-1 px-50">
                    <router-link to="/"
                        class="px-4 py-2 text-sm font-bold hover:text-red-600 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        active-class="text-red-600 bg-indigo-50">
                        Inicio
                    </router-link>
                    <router-link to="/departamentos"
                        class="px-4 py-2 text-sm  hover:text-red-600 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        active-class="text-red-600 bg-indigo-50">
                        Destinos
                    </router-link>
                    <router-link to="/mapa"
                        class="px-4 py-2 text-sm  hover:text-red-600 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        active-class="text-red-600 bg-indigo-50">
                        Fotos & Videos
                    </router-link>
                    <router-link to="/categorias"
                        class="px-4 py-2 text-sm  hover:text-red-600 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        active-class="text-red-600 bg-indigo-50">
                        Foro
                    </router-link>
                </nav>

                <!-- Botones de idioma y login -->
                <div class="hidden md:flex font-bold items-center space-x-3 pr-50" >
                    <button
                        class="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        <span>🇪🇸</span>
                        <span>Español</span>
                    </button>

                    <button v-if="!isLoggedIn"
                        class="px-5 py-2 text-sm  border border-gray-300 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200"
                        @click="handleLogin">
                        Ingresar
                    </button>
                    <button v-else
                        class="px-5 py-2 text-sm  text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-200"
                        @click="handleAccount">
                        Mi Cuenta
                    </button>
                </div>

         
                <button
                    class="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                    @click="toggleMobileMenu">
                    <i class="pi pi-bars text-xl"></i>
                </button>
                <button
                        class="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                        <span>🇪🇸</span>
                        <span>Español</span>
                 </button>
                
            </div>
        </div>

        <!-- Menú móvil -->
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <div class="px-4 py-3 space-y-1">
                    <router-link to="/"
                        class="block px-4 py-2.5 text-sm  hover:bg-indigo-50 hover:text-red-600 rounded-md transition-colors"
                        @click="mobileMenuOpen = false">
                        Inicio
                    </router-link>
                    <router-link to="/departamentos"
                        class="block px-4 py-2.5 text-sm  hover:bg-indigo-50 hover:text-red-600 rounded-md transition-colors"
                        @click="mobileMenuOpen = false">
                        Destinos
                    </router-link>
                    <router-link to="/mapa"
                        class="block px-4 py-2.5 text-sm  hover:bg-indigo-50 hover:text-red-600 rounded-md transition-colors"
                        @click="mobileMenuOpen = false">
                        Fotos & Videos
                    </router-link>
                    <router-link to="/categorias"
                        class="block px-4 py-2.5 text-sm  hover:bg-indigo-50 hover:text-red-600 rounded-md transition-colors"
                        @click="mobileMenuOpen = false">
                        Foro
                    </router-link>

                    <div class="pt-3 border-t border-gray-200 mt-3">
                        <button v-if="!isLoggedIn"
                            class="w-full px-4 py-2.5 text-sm  border border-gray-300 rounded-md hover:border-indigo-600 hover:text-red-600 transition-all"
                            @click="handleLogin">
                            Ingresar
                        </button>
                        <button v-else
                            class="w-full px-4 py-2.5 text-sm  text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md"
                            @click="handleAccount">
                            Mi Cuenta
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'

// Estado del usuario (puedes conectarlo a tu store de autenticación)
const isLoggedIn = ref(false)

// Control del menú móvil
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleLogin = () => {
    // Aquí va tu lógica de login
    console.log('Ir a login')
}

const handleAccount = () => {
    // Aquí va tu lógica de cuenta
    console.log('Ir a mi cuenta')
}
</script>

<style scoped>
/* Asegurar que los gradientes funcionen correctamente */
.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
}
</style>
