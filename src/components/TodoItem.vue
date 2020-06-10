<template>
<!-- "v-bind" is adding a condition that if the todo item is completed then 
the is-complete styling rendered on top of the static class (todo-item) -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <!-- Use the "v-on:change" event to call the markComplete method when the input 
      changes.  -->
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}</p>
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