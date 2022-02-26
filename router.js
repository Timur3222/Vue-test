import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '~/pages/MainPage.vue';
import CategoryPage from '~/pages/CategoryPage.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MainPage
      },

      {
        name: 'catalog',
        path:`/catalog/:code`,
        component: CategoryPage
      }
    ]
  })
}