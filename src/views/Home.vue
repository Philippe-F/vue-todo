This file is a component, it has a template for the HTML, script for the javascript,
and style for the CSS (style is global to the application).

<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- "v-on" is catching the emit from the addTodo method in AddTodo.vue -->
    <AddTodo v-on:add-todo="addTodo"/>

    <!-- [Notes Ref] <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- [Notes Ref] <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <!-- To get the todos from the "data()" function into the Todos component is to
    pass them in (as props) with a directive called "v-bind". Since this is
    being passed in as a prop, we need to goto the todos component (Todos.vue)
    and add the props to the todos component export. -->

    <!-- embed Todos in to the markup -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/> 
  </div>
</template>

<script>
// import components, then export them to be used (embeded) in the template. 
// To use an embeded component; inside of the export (which is juast an object) we 
// have "components" (which is just another object) that defines which components we are using. 

// We can also pass in props to our components

// <HelloWorld msg="Welcome to Your Vue.js App"/>

// In the example above we are passing a msg prop to the HelloWorld component. If
// you go into HelloWorld.vue then you see it interpolated in a h1 tag (<h1>{{ msg }}</h1>)
// which is output to the screen along with everything else inside of the HelloWorld.vue 
// component. 
// [Notes Ref] import HelloWorld from './components/HelloWorld.vue'

import Todos from "../components/Todos"; //import todos 
// import Header from "../components/layout/Header";
import AddTodo from "../components/AddTodo";
import axios from "axios"; 

export default {
  name: 'Home',
  components: {
    // [Notes Ref] HelloWorld

    AddTodo,
    // Header,
    Todos //add Todos to the components 
  },
  // This is going to be a todos list, so we need to access the "todos" from 
  // multiple components (ex. todos.vue, todoItem.vue, addTodoForm.vue, etc). To
  // access that data we store it in the "data()" function and return the data as 
  // an object. 
  
  data() {
    return {
      // todos are an array of objects 
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      // This axios call makes a delete request to the server, we get a response back,
      // and then we delete it from the UI. 
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      // Using destructuring to pull out title and completed from the newTodo object.
      const { title, completed } = newTodo;


      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title, completed: completed
      })
      // When you make a post request to JSONPlaceholder it gives you back that todo
      // along with the id it creates for you. 

      // On submit oof the todo the axios call makes a post request to JSONPlaceholder,
      // gives us a respone, then it gets added to the UI. 
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
    }
  },
  // We are using JSONPlaceholder which provide us with a fake REST API for testing 
  // and prototyping. It works as a real backend that we can make GET, POST, DELETE, 
  // PATCH requests to. 

  // To make our initial request we are goting to use a special method called "created()".
  // It work similar to how "ComponentDidMount" works in REACT, it fires off when the
  // component loads. 
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    // This axios call is going to give us a response and that response has a data 
    // value; res.todos will give us our todos. The code in the ".then()" will fill 
    // the todos array in "data()" (state) with the todos we get back from the axios 
    // request. 
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
/* Global CSS reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0; 
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666; 
}
</style>
