<template>
<!-- "v-bind" is adding a condition that if the todo item is completed then 
the is-complete styling rendered on top of the static class (todo-item) -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <!-- Use the "v-on:change" event to call the markComplete method when the input 
      changes.  -->
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}
      <!-- Now we want to be able to delete each todo. To do that we must traverse up to
      where the todos array is in the "data()", find the id of the object we want to 
      delete, and delete it. 

      We can do that by emiting and event ($emit). Below we used a click handler 
      and passed it an emit event with a name of "del-todo" and passed it param
      of "todo.id" so that we know which one we are deleting.

      On click if you look in the dev tools and click on the events tab. You will
      see the name, type, source, and payload (todo.id) of the event.

      Now, to catch the emit we must go into Todo.vue and add a "v-on" on to the 
      embeded TodoItem.  -->
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: { 
    markComplete() {
      // Since todo.completed is a boolean, we are setting it to its opposite
      // everytime this method is triggered.
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4; 
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>