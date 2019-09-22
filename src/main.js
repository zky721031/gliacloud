import Vue from 'vue'
import setupTimer from './answers/1-timer.js'
import sumOfMultiplesResult from './answers/2-multiples.js'
import integrationResult from './answers/3-integration.js'
import AsyncRunner from './answers/4-event-loop.js'
import VolumeBar from './answers/5-volume-bar.vue'
import SwingingBoxes from './answers/6-swinging-boxes.vue'
import store from './store'

Vue.config.productionTip = false

// 1: timer
setupTimer('#timer')

// 2: multiples
document.querySelector('#multiples > input').value = sumOfMultiplesResult

// 3: integration
document.querySelector('#integration > input').value = integrationResult

// 4: event loop
new AsyncRunner('#event-loop > pre').run()

// 5: volume bar
new Vue({
  store,
  render: h => h(VolumeBar)
}).$mount('#volume-bar > div')

// 6: swinging boxes
new Vue({
  render: h => h(SwingingBoxes)
}).$mount('#swinging-boxes > div')
