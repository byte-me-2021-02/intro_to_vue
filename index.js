/* global Vue */

var app = new Vue({
  el: "#app",
  data: {    
    message: "Hello from JavaScript!",
    name: "briann"
  },
  methods: {
    changeMessage: function() {
      console.log('changing messaage...')
      this.message = "oooooooo";      
    }
  }
});
