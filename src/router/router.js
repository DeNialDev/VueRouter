import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import EditView from "../views/EditView.vue"
import { useUserStore } from "../store/user";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingUser =  true
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
  userStore.loadingUser = false
};

const routes = [
  {
    path: "/",
    component: HomeView,
    beforeEnter: requireAuth,
  },
  {
    path: "/edit/:id",
    component: EditView,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
