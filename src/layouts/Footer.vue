<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
 
        <div>
          <h3 class="text-2xl font-bold text-indigo-400 mb-4">Turismo Bolivia</h3>
          <p class="text-gray-400 text-sm">
            Descubre la riqueza cultural, natural y gastronómica de todos los rincones de Bolivia.
          </p>
        </div>


        <div>
          <h4 class="text-lg font-semibold mb-4">Explorar</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><router-link to="/" class="hover:text-white transition">Inicio</router-link></li>
            <li><router-link to="/departamentos" class="hover:text-white transition">Departamentos</router-link></li>
            <li><router-link to="/mapa" class="hover:text-white transition">Mapa Interactivo</router-link></li>
            <li><router-link to="/categorias" class="hover:text-white transition">Categorías</router-link></li>
          </ul>
        </div>

       
        <div>
          <h4 class="text-lg font-semibold mb-4">Categorías</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>Atracciones turísticas</li>
            <li>Hoteles y alojamiento</li>
            <li>Restaurantes</li>
            <li>Vida nocturna</li>
          </ul>
        </div>

   
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <p class="text-sm text-gray-400">
            Email: info@turismobolivia.bo<br>
            Tel: +591 2 123 4567
          </p>
          <p class="text-xs text-gray-500 mt-6">
            © 2025 Turismo Bolivia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>