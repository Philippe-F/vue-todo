This file is a component, it has a template for the HTML, script for the javascript,
and style for the CSS (style is global to the application).

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- [Notes Ref] <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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

export default {
  name: 'App',
  components: {
    // [Notes Ref] HelloWorld
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
</style>
