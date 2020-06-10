<template>
  <div>
    <form @submit="addTodo">
      <!-- "v-model" binds the input to title in state and listens for changes to
      update state. -->
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
// allows us to make unique ids since this project doesnt 
// have a db.
// import { uuid } from 'vue-uuid';

export default {
  name: "AddTodo",
  // "data()" is returning initial state 
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodo = {
        // id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // Send up to parent
      this.$emit('add-todo', newTodo);

      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px; 
  }

  input[type="submit"] {
    flex: 2;
  }
</style>