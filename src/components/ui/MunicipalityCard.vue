<template>
  <div class="pt-20">
  <Card v-if="municipality"  style="width: 20rem; background-color: white; overflow: hidden;  color: #0B3954;  "  >
    <template #header>
      <img
      alt="Sucre"
        :src="municipality.images[0]"
       
      />
    </template>

    <template #title>
      {{ municipality.name }}
    </template>

    <template #content>
      <p class="m-0">
        {{ municipality.description }}
      </p>
    </template>

    <template #footer>
      <Button label="Ver más" class="p-button-text" />
    </template>
  </Card>

  <p v-else class="text-center text-gray-400">
    Selecciona un municipio
  </p>
  </div>
</template>

<script setup>


defineProps({
  municipality: Object
})
</script>
