<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500,700,700i,800&subset=cyrillic');

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
</style>
