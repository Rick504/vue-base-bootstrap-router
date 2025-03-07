 <template>
  <LoaderPage v-if="store.loader" />
  <RouterView />
</template>

<script setup lang="ts">
import LoaderPage from '@/components/LoaderPage.vue'
import { useStore } from '@/stores/index'

const store = useStore()
</script>
