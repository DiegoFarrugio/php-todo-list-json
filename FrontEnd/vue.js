const { createApp } = Vue

  createApp({
    data() {
      return {
        population : []
      }
    },

    mounted(){
        axios
        .get('http://localhost/PHP-ToDo%20List%20JSON/php-todo-list-json/BackEnd/index.php')
        .then((res) => {
            this.population = res.data
            console.log(this.population);
        });
    }
  }).mount('#app')