<template>
  <b-container class="h-100 d-flex flex-column justify-content-center">
    <b-card no-body>
      <b-card-body>
        <b-card-title>اداره الموقع</b-card-title>
        <b-row class="mb-4">
          <b-col>
            <b-button
              @click="$router.push('/admin/product/add')"
              style="width: 100%;"
              variant="primary"
              >اضافه منتج</b-button
            >
          </b-col>
        </b-row>
        <b-col>
          <div style="display: inline-block;">
            <b-button @click="logout" style="width: 100%;" variant="danger"
              >تسجيل الخروج</b-button
            >
          </div>
        </b-col>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SecureLS from 'secure-ls';
import router from '@/router';
const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_SECRET,
});

export default defineComponent({
  name: 'Dashboard',
  setup() {
    function logout() {
      ls.set('al', false);
      router.push('/');
    }

    return {
      logout,
    };
  },
});
</script>

<style scoped></style>
