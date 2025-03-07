import { StoreUser } from '@/types/user';
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: (): {
    loader: boolean;
    user: StoreUser;
    tokenRememberLogin: string;
  } => {
    return {
      loader: false,
      user: {
        name: null,
        email: null,
        photo: '',
      },
      tokenRememberLogin: '',
    };
  },
  actions: {
    resetUser() {
      this.user = {
        name: null,
        email: null,
        photo: '',
      };
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
