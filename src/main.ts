import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {
  LayoutPlugin,
  ButtonPlugin,
  NavPlugin,
  NavbarPlugin,
  CardPlugin,
  JumbotronPlugin,
  OverlayPlugin,
  SidebarPlugin,
  FormPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  FormGroupPlugin,
  FormFilePlugin,
} from 'bootstrap-vue';
import './scss/bootstrap.scss';
import VueCompositionAPI from '@vue/composition-api';
import { firestorePlugin } from 'vuefire';
import 'reflect-metadata';

[
  VueCompositionAPI,

  firestorePlugin,

  // Bootstrap Vue
  LayoutPlugin,
  ButtonPlugin,
  NavPlugin,
  NavbarPlugin,
  CardPlugin,
  JumbotronPlugin,
  OverlayPlugin,
  SidebarPlugin,
  FormPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  FormGroupPlugin,
  FormFilePlugin,
].forEach(plugin => {
  Vue.use(plugin);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
