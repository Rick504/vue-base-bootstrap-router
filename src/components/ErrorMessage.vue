<template>
  <div>
     <div class="mt-3">
        <p class="text-danger">{{ props.text }}</p>
      </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  text: String
})
</script>
