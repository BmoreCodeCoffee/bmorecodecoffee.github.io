<script setup>
import {RouterView} from 'vue-router'
import Navigation from "./components/Navigation.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="container">
    <header>
      <Navigation/>
    </header>

    <main>
      <RouterView/>
    </main>

    <footer>
      <SiteFooter/>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/globals";
@import "./assets/theme/color_palette";
@import "./assets/theme/screen_sizes";

a, a:visited {
  color: $ksu_purple;
  font-weight: 700;
  text-decoration: underline;
}

a:hover {
  color: $gold;
}

.container {
  background-color: rgba(255, 255, 255, 0.7);
  color: $dark_gray;
  margin: 2em auto;
  padding: 1em;

  @media only screen and (max-width: $medium-min) {
    max-width: $large;
  }
}

</style>
