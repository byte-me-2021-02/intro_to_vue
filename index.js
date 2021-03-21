/* global Vue */

var app = new Vue({
  el: "#app",
  data: {    
    message: "Hello from JavaScript!",
    name: "briann",
    showSecret: false
  },
  methods: {
    changeMessage: function() {
      console.log('changing messaage...')
      this.message = "oooooooo";      
    },
    toggleSecret: function() {
      console.log('toggling secret...');
      this.showSecret = !this.showSecret;
      // if (this.showSecret === true) {
      //   this.showSecret = false;
      // } else {
      //   this.showSecret = true;
      // }
    }
  }
});
