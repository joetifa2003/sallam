<template>
  <b-container class="h-100 d-flex flex-column justify-content-center">
    <b-card no-body>
      <b-card-body>
        <b-card-title>اداره الموقع</b-card-title>
        <b-row class="mb-4">
          <b-col>
            <b-button
              @click="$router.push('/admin/product/add')"
              style="width: 100%"
              variant="primary"
              >اضافه منتج</b-button
            >
          </b-col>
        </b-row>
        <div class="d-inline-block">
          <b-button @click="logout" style="width: 100%" variant="danger"
            >تسجيل الخروج</b-button
          >
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import SecureLS from 'secure-ls'
const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_SECRET,
})

export default Vue.extend({
  name: 'Dashboard',
  methods: {
    logout(): void {
      ls.set('al', false)
      this.$router.push('/')
    },
  },
})
</script>

<style scoped></style>
