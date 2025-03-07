import { useStore } from '../stores/index'
import { useRouter } from 'vue-router'

export default function useAuth() {
  const store = useStore()
  const router = useRouter()

  if (!store.user.name || !store.user.email) {
    router.push('/login')
  }
}
