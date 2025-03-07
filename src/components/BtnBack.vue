<template>
  <div>
    <div class="d-flex justify-content-end w-100 p-2">
      <a :href="props.link" class="btn btn-danger">Voltar</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  link: {
    type: String,
    required: true
  }
});

</script>
