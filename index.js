/* global Vue */

var app = new Vue({
  el: "#app",
  data: {    
    message: "Hello from JavaScript!",
    name: "briann",
    showSecret: false,
    fruits: ["apple", "banana", "honeydew"],
    newFruit: ""
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
    },
    addFruit: function() {
      console.log('adding fruit...')
      // access newFruit
      console.log(this.newFruit);
      // access the fruits array
      console.log(this.fruits);
      // add newFruit to the fruits array
      this.fruits.push(this.newFruit);
      // reset the value of newFruit
      this.newFruit = "";
    }
  }
});
