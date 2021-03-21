/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// XHR

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      todos: []
    };
  },
  methods: {
    makeWebRequest: function() {
      console.log('making web request...')
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        this.todos = response.data;
        console.log(response);
      });
      console.log('on line 16')
    }
  }
});
