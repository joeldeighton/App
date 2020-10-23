<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Recently Played</h3>
    <hr/>
    <div class="col-sm-3" v-for="song in recentlyPlayed" v-bind:key="song.name">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ song.track.name }} </h3>
        </div>
        <div class="container-fluid">
          <img  v-bind:src="song.track.album.images[1].url" height="300" width="300">
        </div>
      </div>
      <!-- <span v-for="artist in song.track.album.artists" v-bind:key="artist.name">
          {{ artist.name }}
      </span> -->
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
