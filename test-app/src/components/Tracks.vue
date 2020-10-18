<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Top Tracks</h3>
    <hr/>
    <div class="col-sm-4" v-for="album in topTracks" v-bind:key="album.title">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ album.name }} </h3>
        </div>
        <div class="panel-body">
          <div v-for="image in album.images" v-bind:key="image.images">
            {{ image.images[0].url }}
          </div>
        </div>
      </div>
    <div v-for="artist in album.artists" v-bind:key="artist.id">
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
