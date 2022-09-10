<template>
  <nav>
    <div class="row center-xs">
        <div class="col-xs-3 link-space">
            <RouterLink :to="{name: 'home'}">Home page</RouterLink>
            <RouterLink :to="{name: 'code-of-conduct'}">Code of Conduct</RouterLink>
        </div>
    </div>
    <div class="row">
      <div class="col-xs-12 center-xs">
        <img src="../assets/img/bcc_banner_long.svg" alt="Baltimore Code & Coffee logo"/>
      </div>
    </div>
    <!-- Maybe we'll need this later, leaving it in for now -->
    <!--        <RouterLink to="/">Home</RouterLink>-->
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