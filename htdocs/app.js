import Vue from 'vue';
import App from './App';
const NotFound = { template: '<p>Page not found</p>' }
const home = { template: '<p>home page</p>' }
const about = { template: '<p>about page</p>' }

const routes = {
  '/': home,
  '/about': about
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})