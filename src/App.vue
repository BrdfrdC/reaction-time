<template>
  <router-view v-slot="{Component}">
      <component :is="Component" :key="$route.path"></component>
  </router-view>
</template>

<style>

@font-face {
  font-family: "Raleway";
  src: url("./assets/fonts/Raleway-Regular.ttf");
}

@font-face {
  font-family: "Raleway Heavy";
  src: url("./assets/fonts/Raleway-Heavy.ttf");
}

@font-face {
  font-family: "Raleway Bold";
  src: url("./assets/fonts/Raleway-Bold.ttf");
}

</style>