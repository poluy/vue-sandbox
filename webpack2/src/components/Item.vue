<template>
  <div class="item">
    <h1>{{ msg }}</h1>
    <h2>This is sparta!!!!</h2> 
  </div> 
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 2App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
