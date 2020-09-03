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
import { defineComponent, ref } from '@vue/composition-api';
import SecureLS from 'secure-ls';
import { SHA256 } from 'crypto-js';
import router from '@/router';

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_SECRET,
});

export default defineComponent({
  name: 'AdminLogin',
  setup() {
    const username = ref('');
    const password = ref('');

    function login() {
      console.log('WE ARE GOOD');
      if (
        SHA256(username.value).toString() ===
          process.env.VUE_APP_ADMIN_USERNAME &&
        SHA256(password.value).toString() === process.env.VUE_APP_ADMIN_PASSWORD
      ) {
        ls.set('al', true);
        router.push('/admin');
      }
    }

    return {
      username,
      password,
      login,
    };
  },
});
</script>

<style scoped></style>
