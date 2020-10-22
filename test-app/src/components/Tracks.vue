<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Top Tracks</h3>
    <hr/>
    <div class="col-sm-4" v-for="song in topTracks" v-bind:key="song.name">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ song.name }} </h3>
        </div>
        <div class="panel-body">
          {{ song.album.images[1].url }}
          <!-- <img v-bind:src="image" /> -->
        </div>
      </div>
      <div v-for="artist in song.artists" v-bind:key="artist.name">
          {{ artist.name }}
      </div>
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav'
import { getTopTracks } from '../../utils/api'
export default {
  name: 'topTracks',
  components: {
    AppNav
  },
  data () {
    return {
      topTracks: ''
    }
  },
  methods: {
    getTopTracks () {
      getTopTracks().then((songs) => {
        this.topTracks = songs
      })
    }
  },
  mounted () {
    this.getTopTracks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
