<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Top Artists</h3>
    <hr/>
    <div class="col-sm-3" v-for="artist in topArtists" v-bind:key="artist.name">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ artist.name }} </h3>
        </div>
        <div class="container-fluid">
          <img v-bind:src="artist.images[1].url" height="300" width="300">
        </div>
      </div>
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav'
import { getTopArtists } from '../../utils/api'
export default {
  name: 'topArtists',
  components: {
    AppNav
  },
  data () {
    return {
      topArtists: ''
    }
  },
  methods: {
    getTopArtists () {
      getTopArtists().then((artists) => {
        this.topArtists = artists
      })
    }
  },
  mounted () {
    this.getTopArtists()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
