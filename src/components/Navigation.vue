<template>
  <nav>
    <div class="row center-xs">
      <div class="col-xs-4 col-md-2">
        <RouterLink :to="{name: 'home'}">Home page</RouterLink>
      </div>
      <div class="col-xs-4 col-md-2">
        <RouterLink :to="{name: 'lightningtalks'}">Lightning Talks</RouterLink>
      </div>
      <div class="col-xs-4 col-md-2">
        <RouterLink :to="{name: 'code-of-conduct'}">Code of Conduct</RouterLink>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 center-xs">
        <img src="../assets/img/bcc_banner_long.svg" alt="Baltimore Code & Coffee logo"/>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "../assets/theme/color_palette";

img {
  width: 90%;
  max-width: 800px;
  height: auto;
}

.link-space > * {
  margin-left: 8px;
}
</style>