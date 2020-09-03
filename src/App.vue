<template>
  <div id="app" class="h-100" style="padding-top: 88.88px;">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
export default Vue.extend({
  components: {
    Nav,
  },
});
</script>

<style lang="scss"></style>
