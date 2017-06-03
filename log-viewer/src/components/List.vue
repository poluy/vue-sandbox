<template>
  <div class="hello">
    <h2>List length = {{items.length}} and count = {{count}} </h2>
      <v-btn @click.native="addNewItem">Add new Item!</v-btn>
      <v-btn @click.native="increaseId">Increase id!</v-btn>
      <v-btn @click.native="toggle">Toggle</v-btn>
    <v-list>
      <v-list-item v-for="item in items">
      <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon class="getStatusColor(item)">{{item.status}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title+doIt(item)"></v-list-tile-title>
                <v-list-tile-title v-text="item.id"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
            </v-list-tile>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    doIt (item) {
      return '     ' + item.id
    },
    increaseId () {
      this.count = this.count + 1
      console.log('yuou')
      this.items.forEach(function (item) {
        item.id = item.id + 1
        if (item.status === 'error') {
          item.status = 'warning'
        } else {
          item.status = 'error'
        }
      })
    },
    getStatusColor (item) {
      if (item.status === 'error') {
        return 'red--text'
      }
      return 'green--text'
    },
    addNewItem () {
      var newItem = { id: 1, title: 'some text ', status: 'error' }
      // var newItem2 = { id: 1, title: 'some text ', status: 'warning' }
      // this.items.splice(0, 0, newItem)
      // this.items.splice(0, 0, newItem2)
      // this.items.splice(0, 0, newItem)
      // this.items.splice(0, 0, newItem2)
      // this.items.splice(0, 0, newItem)
      // this.items.splice(0, 0, newItem2)
      // this.items.splice(0, 0, newItem)
      // this.items.splice(0, 0, newItem2)
      this.items.splice(0, 0, newItem)
    },
    toggle () {
      var temp = this.items
      this.items = this.items2
      this.items2 = temp
    }
  },
  data () {
    return {
      count: 0,
      msg: 'Welcome to Your Vue.js App',
      items: [
        { id: 1, title: 'some text', status: 'error' },
        { id: 2, title: 'some text12 ', status: 'info' },
        { id: 3, title: 'some tex12t', status: 'warning' },
        { id: 4, title: 'some text 12', status: 'info' },
        { id: 5, title: 'some text 4', status: 'error' }
      ],
      items2: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
