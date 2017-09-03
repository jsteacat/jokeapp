<template>
  <div id="app">
      <h3>Got jokes?</h3>
      <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
      <div>
          {{ $store.state }}
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'app',
    data () {
        return {

        }
    },
    methods: mapActions([
        'initJokes'
    ])
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2C3350;
    margin-top: 60px;
  }
</style>
