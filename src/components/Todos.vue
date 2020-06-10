This is a serperate component to display the todos

<template>
  <div>
    <!-- The todos props is an array, so we want to loop through them with a directive 
    called "v-for". When you loop through an array using "v-for" you need to
    attach a unique key attached to it, so we use "v-bind:key" to attach the id
    to each todo. -->

    <div v-bind:key="todo.id" v-for="todo in todos">
      <!-- as we iterate we bind each todo to a TodoItem  -->
      <TodoItem v-bind:todo="todo"/> 
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem"; // import TodoItem 

export default {
  name: "Todos",
  components: {
    TodoItem // Add TodoItem to components 
  },
  // Add the todos props that are being passed in from App.vue. Now we should have 
  // access to them in the template above.
  props: ["todos"]
}
</script>

<style scoped>

</style>