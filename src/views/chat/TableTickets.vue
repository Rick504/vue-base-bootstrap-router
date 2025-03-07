<template>
  <div class="w-75">
    <h3 class="mt-5">Solicitações recentes</h3>
    <div v-if="!tickets || tickets.length === 0" class="alert alert-info" role="alert">
      Não há solicitações recentes.
    </div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Assunto</th>
            <th scope="col">Última resposta</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td scope="row">
              <button class="btn" @click="goToChat(ticket.id.toString())">
                <strong>{{ ticket.title }}</strong>
              </button>
            </td>
            <td>{{ formatDate(ticket.lastResponse) }}</td>
            <td>{{ getStatusLabel(ticket.status) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue'
import { Ticket } from '@/types/chat'
import { useRouter } from 'vue-router'

const props = defineProps<{ ticketsData: Ticket[] }>()

import { ref } from 'vue'

const tickets = ref(props.ticketsData || [])
const router = useRouter()

watch(() => props.ticketsData, (newTickets) => {
  tickets.value = newTickets
}, { immediate: true })

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'open':
      return 'Aberto';
    case 'closed':
      return 'Fechado';
    default:
      return 'Desconhecido';
  }
}

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('pt-BR', options)
}

const goToChat = (id: string) => {
  router.push({ name: 'MessagesView', params: { id } })
}
</script>

<style scoped>
  th {
    background-color: rgb(96, 228, 147) !important;
  }
</style>
