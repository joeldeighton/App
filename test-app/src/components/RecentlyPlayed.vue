<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Recently Played</h3>
    <hr/>
    <div class="col-sm-4" v-for="song in recentlyPlayed" v-bind:key="song">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ song.track.album.name }} </h3>
        </div>
        <div class="panel-body"> {{ song.track.album.images[1].url }}
        </div>
      </div>
        {{ song.track.name }}
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav'
import { getRecentlyPlayed } from '../../utils/api'
export default {
  name: 'recentlyPlayed',
  components: {
    AppNav
  },
  data () {
    return {
      recentlyPlayed: ''
    }
  },
  methods: {
    getRecentlyPlayed () {
      getRecentlyPlayed().then((plays) => {
        this.recentlyPlayed = plays
      })
    }
  },
  mounted () {
    this.getRecentlyPlayed()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
