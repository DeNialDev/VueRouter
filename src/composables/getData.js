import { ref } from 'vue'
import axios from 'axios'
export const useGetData = () => {
    const loading = ref(true)
    const data = ref(null)
    const getData = async (url) => {
        try {
            loading.value = true
            const res = await axios.get(url)
            data.value = res.data
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }

    }

    return {
        getData,
        data,
        loading
    }
}