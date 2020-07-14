import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SecureLS from 'secure-ls'
const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_SECRET,
})

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () =>
      import(/* webpackChunkName: "services" */ '../views/Services.vue'),
  },
  {
    path: '/admin-login',
    name: 'Admin login',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/admin/auth/AdminLogin.vue'
      ),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    meta: {
      requireAdmin: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/admin/Dashboard.vue'
      ),
  },
  {
    path: '/admin/product/add',
    name: 'Product add',
    meta: {
      requireAdmin: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/admin/products/AddProduct.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const requireAdmin = to.matched.some(x => x.meta.requireAdmin)
  if (requireAdmin) {
    if (ls.get('al')) {
      next()
    } else {
      next('/admin-login')
    }
  } else {
    if (to.fullPath === '/admin-login') {
      if (ls.get('al')) {
        next('/admin')
      } else {
        next()
      }
    }
    next()
  }
})

export default router
