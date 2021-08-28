import Vue from 'vue'
// Vue.directive('make-red', {
//   inserted: function (el) {
//     el.style.color = 'red'
//   }
// })

// 样式变红
Vue.directive('make-red', {
  inserted (el) {
    el.style.color = 'red'
  }
})
