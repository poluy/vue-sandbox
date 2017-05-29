<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  <v-chip>Example Chip</v-chip>
  <div class="text-xs-center">
          <v-chip info>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
            </v-avatar>
            Trevor Hansen
          </v-chip>
        </div>
          <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn primary light slot="activator">Dropdown</v-btn>
      <v-list>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-icon right>star</v-icon>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    <v-btn close class="red white--text">Decline 12 3
      <v-icon light right>block</v-icon>
      <v-icon light right>star</v-icon>
    </v-btn>    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        { title: 'some text' },
        { title: 'some text 2' },
        { title: 'some text 3' }
      ]
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
