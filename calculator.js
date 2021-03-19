/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      total: ""
    };
  },
  methods: {
    computeSum: function() {
      console.log('computing sum...');
      // add the three values
      console.log(typeof this.number1)
      console.log(this.number2)
      console.log(this.number3)
      console.log(parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3));
      this.total = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    }
  }
});


// decomposition
// 3 v models, three different input boxes
// v on click on the button
// function to add the three values   
// show the final value to the user
// 
