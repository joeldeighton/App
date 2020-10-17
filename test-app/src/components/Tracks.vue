<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Top Tracks</h3>
    <hr/>
    <div class="col-sm-4" v-for="song in topTracks" v-bind:key="song">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ song.name }} </h3>
        </div>
        <div class="panel-body">
        </div>
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
