import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/fireBaseConfig'
export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null
    }),
    actions: {
        async registerUser(email, password) {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                console.log(user)
                this.userData = {email: user.email, uid: user.uid}
            } catch (error) {
                console.log(error)
            }
        }
    },

})
