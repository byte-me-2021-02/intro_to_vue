/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "",
      price: "",
      description: "",
      image_url: ""
    };
  },
  methods: {
    createProduct: function() {
      console.log('creating product...');
      // mimic insomnia
      // post /api/products
      axios.post("http://localhost:3000/api/products", {
        name: this.name,
        price: this.price,
        description: this.description,
        image_url: this.image_url
      }).then(response => {
        console.log(response.data);
      });
    }
  }
});