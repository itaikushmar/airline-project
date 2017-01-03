import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

// import Home from './App.vue';
import Home from './components/FlightSearch.vue';
import Flights from './components/FlightCenter';
import Planes from './components/PlaneCenter.vue';
import Passengers from './components/PassengerCenter';
import Navbar from './components/Navbar';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/flights',
  component: Flights
}, {
  path: '/planes',
  component: Planes
}, {
  path: '/passengers',
  component: Passengers
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.http.options.root = 'http://localhost/airline/server/api';

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
