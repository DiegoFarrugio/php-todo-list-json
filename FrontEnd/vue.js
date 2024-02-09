const { createApp } = Vue

  createApp({
    data() {
      return {
        thingsToDo : [],
        newTodo: '',
      }
    },

    mounted(){
      axios
      .get('http://localhost/PHP-ToDo%20List%20JSON/php-todo-list-json/BackEnd/index.php')
      .then((res) => {
          this.thingsToDo = res.data
          console.log(this.thingsToDo);
      });
  },

    methods : {

      addTodoList(){
        axios
        .post('http://localhost/PHP-ToDo%20List%20JSON/php-todo-list-json/BackEnd/addTodo.php',
        {
          list : this.newTodo,
          done : false
        },
        {
          headers:{ 'Content-Type' : 'multipart/form-data'}
        })

        .then((res) => {
          if(res.data == 200){
            this.thingsToDo.push({
              list : this.newTodo,
              done: false
            })
            this.newTodo = '';
          }
        });
      },
    },

  }).mount('#app')