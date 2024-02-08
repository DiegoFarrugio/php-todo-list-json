const { createApp } = Vue

  createApp({
    data() {
      return {
        thingsToDo : []
      }
    },

    methods : {
        
    },

    mounted(){
        axios
        .get('http://localhost/PHP-ToDo%20List%20JSON/php-todo-list-json/BackEnd/index.php')
        .then((res) => {
            this.thingsToDo = res.data
            console.log(this.thingsToDo);
        });
    }
  }).mount('#app')