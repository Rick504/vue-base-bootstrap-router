

<template>
  <main class="w-50 d-flex flex-column justify-content-center align-items-center mx-auto" style="height: 100vh;">
    <h1 class="mb-5">
      <strong>
        Suporte
      </strong>
    </h1>
    <form @submit.prevent="login" class="w-100 p-5 bg-light rounded-3 shadow border">
      <div class="mb-3">
        <label for="email" class="form-label">E-mail:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control fs-4"
          placeholder="Digite seu e-mail"
          required
        />
      </div>

      <div class="mb-3 position-relative">
        <label for="password" class="form-label">Senha:</label>
        <div class="input-group">
          <input
            id="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            class="form-control fs-4"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <ErrorMessage v-if="errorLogin" text="Usuário ou senha incorretos, ou permissão negada." />
      </div>

      <div class="mb-3 mt-5 d-flex justify-content-center align-items-center">
        <button type="submit" class="btn btn-success w-25 blue-enter font-weight-bold text-uppercase fs-4">
          Entrar
        </button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import router from '@/router'
import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'

import { useStore } from '@/stores/index'
const store = useStore()

const email = ref('')
const password = ref('')
const errorLogin = ref(false)
const showPassword = ref(false)

const authService = new AuthService()
const userService = new UserService()

const isLoader = (value: boolean) => {
  return (store.loader = value)
}

const login = async () => {
  isLoader(true)
  const userInfoAuth = {
    email: email.value,
    password: password.value,
    rememberMe: false
  }
  try {
    if (email.value && password.value) {
      const userAuth = await authService.login(userInfoAuth)
      const { data } = await userService.getUserInfo()
      console.log('userInfo:', data.support)
      if (userAuth.auth && data.support) {
        store.user = data
        router.push({ name: 'Dashboard' })
        errorLogin.value = false
        isLoader(false)
      } else {
        isLoader(false)
        errorLogin.value = true
      }
    }
  } catch {
    isLoader(false)
    errorLogin.value = true
  }
}
</script>

<style scoped>
  input,
  label{
    font-size: 1rem;
    color: black;
  }
</style>
