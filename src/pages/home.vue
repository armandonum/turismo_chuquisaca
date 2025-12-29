<template>
  <DefaultLayout>
<div class="grid grid-cols-1 md:grid-cols-2 items-start md:pl-30">
  
      <!-- Tarjeta -->
      <MunicipalityCard
        :municipality="selectedMunicipality"
      />

      <!-- Mapa -->
    
<ChuquisacaMap
        @select="handleSelect"
        
      />


      

    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ChuquisacaMap from '../components/map/ChuquisacaMap.vue'
import MunicipalityCard from '../components/ui/MunicipalityCard.vue'



const selectedMunicipality = ref(null)

const handleSelect = (municipality) => {
  selectedMunicipality.value = municipality
}
</script>
