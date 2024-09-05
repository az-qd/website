import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: () => import('../components/home/index.vue'),
      children: [
        { path: '/index', name: 'index', component: () => import('../views/home/index.vue') },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/about/index.vue'),
          redirect: '/about/jianjie',
          children: [
            {
              path: 'jianjie',
              name: 'jianjie',
              component: () => import('../views/about/jianjie.vue')
            },
            {
              path: 'yuanjing',
              name: 'yuanjing',
              component: () => import('../views/about/yuanjing.vue')
            },
            {
              path: 'address',
              name: 'address',
              component: () => import('../views/about/address.vue')
            }
          ]
        },
        {
          path: 'ke',
          name: 'ke',
          component: () => import('../views/ke/index.vue'),
          redirect: '/ke/shzr',
          children: [
            {
              path: 'shzr',
              name: 'shzr',
              component: () => import('../views/ke/shzr.vue')
            },
            { path: 'kcxfz', name: 'kcxfz', component: () => import('../views/ke/kcxfz.vue') }
          ]
        },
        // {
        //   path: 'news',
        //   name: 'news',
        //   component: () => import('../views/news/index.vue'),
        //   redirect: '/news/action',
        //   children: [
        //     {
        //       path: 'action',
        //       name: 'action',
        //       component: () => import('../views/news/action.vue')
        //     },
        //     {
        //       path: 'video',
        //       name: 'video',
        //       component: () => import('../views/news/video.vue')
        //     }
        //   ]
        // },
        {
          path: '/service',
          name: 'service',
          redirect: '/service/government',
          component: () => import('../views/service/index.vue'),
          children: [
            {
              path: 'government',
              name: 'government',
              component: () => import('../views/service/government.vue')
            },
            { path: 'keyan', name: 'keyan', component: () => import('../views/service/keyan.vue') },
            {
              path: 'newfarmer',
              name: 'newfarmer',
              component: () => import('../views/service/newfarmer.vue')
            }
          ]
        },
        {
          path: '/person',
          name: 'person',
          component: () => import('../views/person/index.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Any',
      redirect: '/'
    }
  ]
})

export default router
