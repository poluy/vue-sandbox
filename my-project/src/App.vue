<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <p>Number of operations: {{count}}</p>
    <span v-bind:title='message'>{{ message }}</span>
    <input v-model="message">
    <p/>
    <button v-on:click="togle">Click me to togle: {{show}}</button>
    <span>{{show}}</span>
    <p/>
    <span v-if="show">{{message}}</span>
    <p/>
    <button v-on:click="addItem">Add item to the list</button>
    <button v-on:click="changeArrays">Change arrays - {{items.length}} - {{items2.length}}</button>
    <ul>
      <li v-for="item in items">
        {{item.id}} - {{item.text}}
      </li>      
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Some message yopta!111',
      show: true,
      count: 0,
      items: [
        { id: 1, text: 'text 1' },
        { id: 2, text: 'text 2' }
      ],
      items2: [
        { id: 1, text: 'text 1' },
        { id: 2, text: 'text 2' }
      ]
    }
  },
  methods: {
    togle: function (val) {
      this.show = !this.show
    },
    addItem () {
      // this.items.push({ id: 3, text: 'Yopta text' })
      this.items.splice(1, 0, { id: this.count, text: 'Yopta text' })
      this.items[0].id = this.items[0].id + 1
    },
    changeArrays () {
      var tmp = this.items
      this.items = this.items2
      this.items2 = tmp
      this.count = this.count + 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
