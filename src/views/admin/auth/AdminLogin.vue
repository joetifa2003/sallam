<template>
  <b-container
    class="h-100 d-flex flex-column justify-content-center align-items-center"
  >
    <b-row class="w-100 justify-content-center">
      <b-col cols="12" md="8" lg="6">
        <b-card no-body>
          <b-card-body>
            <b-card-title>تسجيل الدخول</b-card-title>
            <b-input
              v-model="username"
              class="mb-3 form-control-alternative"
              placeholder="اسم المستخدم"
            />
            <b-form-input
              v-model="password"
              class="mb-3"
              placeholder="كلمه المرور"
              type="password"
            />
            <b-button @click="login" variant="primary">تسجيل الدخول</b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import SecureLS from 'secure-ls'
import { SHA256 } from 'crypto-js'
import Vue from 'vue'

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_SECRET,
})

export default Vue.extend({
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login(): void {
      if (
        SHA256(this.username).toString() ===
          process.env.VUE_APP_ADMIN_USERNAME &&
        SHA256(this.password).toString() === process.env.VUE_APP_ADMIN_PASSWORD
      ) {
        ls.set('al', true)
        this.$router.push('/admin')
      }
    },
  },
})
</script>

<style scoped></style>
