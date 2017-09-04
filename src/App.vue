<template>
  <div id="app">
      <div class="container">
          <div class="row">
              <h3>Got jokes?</h3>
              <div class="col-md-12">
                  <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
                  <button class="btn btn-primary" @click="addJoke">Add Random Joke</button>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 filters">
                  <div class="form-check form-check-inline" v-for="type in types">
                      <label class="form-check-label">
                          <input
                                  class="form-check-input"
                                  type="checkbox"
                                  :value="type"
                                  v-model="checkedTypes"
                                  checked> {{ type }}
                      </label>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 joke__list">
                  <joke-item
                          v-for="(joke, index) in $store.state.jokes"
                          v-show="checkedTypes.includes(joke.type)"
                          :joke="joke"
                          :index="index"
                          :key="index"></joke-item>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './components/Joke.vue'

export default {
    name: 'app',
    data () {
        return {
            types: ['general', 'knock-knock', 'programming'],
            checkedTypes: ['general', 'knock-knock', 'programming'],
        }
    },
    methods: mapActions([
        'initJokes',
        'addJoke'
    ]),
    components: {
        jokeItem: Joke
    }
}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2C3350;
        margin-top: 60px;
    }

    .joke__list {
        margin: 15px 0;
    }

    .filters {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }

    .form-check {
        margin-right: 10px;
    }

    .form-check-input {
        vertical-align: sub;
    }
</style>
