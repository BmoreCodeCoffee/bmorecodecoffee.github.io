<template>
  <div class="row">
    <div class="col-xs-0 col-md-4"/>
    <div class="col-xs-6 col-md-1 center-xs">
      <a href="https://github.com/BmoreCodeCoffee">
        <img class="icon" src="../assets/img/icons/github.svg"
             alt="Github icon that links to the Baltimore Code & Coffee Github"/>
      </a>
    </div>
    <div class="col-xs-0 col-md-2"/>
    <div class="col-xs-6 col-md-1 center-xs">
      <a href="https://twitter.com/BmoreCodeCoffee">
        <img class="icon" src="../assets/img/icons/twitter.svg"
             alt="Twitter icon that links to Baltimore Code & Coffee Twitter"/>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/theme/color_palette";

.icon {
  width: 50px;
  height: auto;
}

.icon:hover {
  cursor: pointer;
  opacity: 50%;
}
</style>