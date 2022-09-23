<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from './layout/header/HeaderComponent.vue';
import FooterComponent from './layout/footer/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style scoped>
</style>
