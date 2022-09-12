import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const increment = () => count.value++

    const double = computed(() => count.value * 2)
    return {
        count, increment, double
    }
})