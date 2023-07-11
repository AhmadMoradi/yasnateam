import {defineStore} from "pinia";

export const useAppStore = defineStore('app', () => {
  const status = ref('idle')
})