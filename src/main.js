import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash';

window.Event = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
