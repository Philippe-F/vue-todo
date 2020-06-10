This is a serperate component to display the todos

<template>
  <div>
    <!-- The todos props is an array, so we want to loop through them with a directive 
    called "v-for". When you loop through an array using "v-for" you need to
    attach a unique key attached to it, so we use "v-bind:key" to attach the id
    to each todo. -->

    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  // Add the todos props that are being passed in from App.vue. Now we should have 
  // access to them in the template above.
  props: ["todos"]
}
</script>

<style scoped>

</style>