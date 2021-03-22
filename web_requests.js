/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// XHR

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      newTodo: "",
      todos: []
    };
  },
  methods: {
    loadTodos: function() {
      console.log('about to make a web request');
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        console.log(response.data);
        this.todos = response.data;      
      }) 
    },
    makeNewTodo: function() {
      console.log('post request');
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        userId: 4,
        title: this.newTodo        
      }).then(response => {
        console.log(response);
        this.todos.push(response.data);
      })
    }
  },
  created: function() {
    console.log('in created...');
    this.loadTodos();
  }
});
