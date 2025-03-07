<template>
    <div class="d-flex flex-column align-items-end h-100 p-2">
        <button @click="logout" class="btn btn-danger">Sair</button>
    </div>
</template>
<script setup lang="ts">
import router from '@/router'
import { useStore } from '@/stores/index'
const store = useStore()

const logout = () => {
  router.push('/login')
  store.resetUser()
}
</script>
