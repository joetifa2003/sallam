<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">سلام</b-navbar-brand>

    <b-navbar-toggle target="sidebar-1"></b-navbar-toggle>

    <b-sidebar
      bg-variant="transparent-primary"
      type="dark"
      id="sidebar-1"
      title="سلام"
      shadow
      header-class="text-white"
    >
      <b-navbar-nav style="padding-inline-start: 16px;">
        <b-nav-item class="m-0" to="/"><div>الرئيسية</div></b-nav-item>
        <b-nav-item class="m-0" to="/about">من نحن</b-nav-item>
        <b-nav-item class="m-0" to="/services">خدماتنا</b-nav-item>
        <b-nav-item class="m-0" to="/products">منتجاتنا</b-nav-item>
        <b-nav-item-dropdown class="m-0" id="my-nav-dropdown" text="خدماتنا">
          <div style="text-align: start;">
            <b-dropdown-item>
              <span class="font-weight-bold">جميع الخدمات</span>
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item
              @click="$router.push('/services')"
              v-for="(service, i) in services"
              :key="i"
              ><span class="font-weight-bold">{{
                service
              }}</span></b-dropdown-item
            >
          </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav style="padding-inline-start: 16px;">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="بحث"
          ></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-sidebar>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="m-0" to="/" active><div>الرئيسية</div></b-nav-item>
        <b-nav-item class="m-0" to="/about" active>من نحن</b-nav-item>
        <b-nav-item class="m-0" to="/services" active>خدماتنا</b-nav-item>
        <b-nav-item class="m-0" to="/products" active>منتجاتنا</b-nav-item>
        <b-nav-item-dropdown
          class="m-0"
          id="my-nav-dropdown"
          text="خدماتنا"
          right
        >
          <div style="text-align: start;">
            <b-dropdown-item>
              <span class="font-weight-bold">جميع الخدمات</span>
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item
              @click="$router.push('/services')"
              v-for="(service, i) in services"
              :key="i"
              ><span class="font-weight-bold">{{
                service
              }}</span></b-dropdown-item
            >
          </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mr-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="بحث"
          ></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Nav',
  setup() {
    const services: Ref<string[]> = ref([
      'صيانه طلمبات أعماق',
      'صيانه مواتير غاطس',
      'تطليع و تنزيل طلمبات',
      'صيانه لوح كنترول',
      'خراطه معادن',
      'لحم معادن',
      'حفر ابار',
      'تطهير ابار',
      'أوناش',
    ]);

    return {
      services,
    };
  },
});
</script>
