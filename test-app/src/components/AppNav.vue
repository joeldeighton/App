<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/tracks" class="navbar-brand">Top Tracks</router-link>
      <router-link to="/artists" class="navbar-brand">Top Artists</router-link>
      <router-link to="/recently-played" class="navbar-brand">Recently Played</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'app-nav',
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right {
    margin-right: 0px !important;
}
.log {
    margin: 5px 10px 0 0;
}
</style>
