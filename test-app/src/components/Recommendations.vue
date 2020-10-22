<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Recommendations</h3>
    <hr/>
    <div class="col-sm-4" v-for="songs in recommendations" v-bind:key="songs.name">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ songs }} </h3>
        </div>
        <div class="panel-body"> {{ "songs.tracks.album.images[1].url" }}
        </div>
      </div>
      <div v-for="artist in songs.tracks" v-bind:key="artist.name">
          {{ "artist.name" }}
      </div>
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav'
import { getRecommendations } from '../../utils/api'
export default {
  name: 'recommendations',
  components: {
    AppNav
  },
  data () {
    return {
      recommendations: ''
    }
  },
  methods: {
    getRecommendations () {
      getRecommendations().then((recommended) => {
        this.recommendations = recommended
      })
    }
  },
  mounted () {
    this.getRecommendations()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
