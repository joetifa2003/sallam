<template>
  <div>
    <b-jumbotron class="" style="height: 300px; border-radius: 0">
      <template v-slot:header>سلام</template>
      <p class="font-weight-bold">
        شركة السلام لطلمبات الاعماق الغاطسة من الشركات الرائدة في مجال توريد
        وصيانة طلمبات الاعماق الغاطسة الكهربائية و قد تاسست الشركة عام 1990 و قد
        قامت بتنفيذ اعمالها في مواقع مختلفة داخل جميع انحاء الجمهورية
      </p>
    </b-jumbotron>
    <b-container>
      <section>
        <h1 class="title-underline mb-2">منتجاتنا</h1>
        <b-row>
          <b-col
            v-for="(product, i) in products"
            :key="i"
            cols="12"
            md="4"
            lg="4"
            @mouseenter="product.hover = true"
            @mouseleave="product.hover = false"
            class="mb-2"
          >
            <b-overlay no-center :show="product.hover">
              <template v-slot:overlay>
                <div
                  style="width: 100%; height: 100%;"
                  class="d-flex justify-content-center flex-column p-5"
                >
                  <b-button variant="primary">المزيد</b-button>
                </div>
              </template>
              <div>
                <b-card no-body style="min-height: 384px">
                  <b-card-body class="d-flex flex-column  ">
                    <b-card-img
                      class="mx-auto mb-2"
                      style="width: auto; max-height: 300px; max-width: 100%  "
                      :src="product.image"
                    />
                    <b-card-title class="mt-auto">{{
                      product.name
                    }}</b-card-title>
                  </b-card-body>
                </b-card>
              </div>
            </b-overlay>
          </b-col>
        </b-row>
      </section>
      <section class="mt-3">
        <h1 class="title-underline">خدماتنا</h1>
        <b-row>
          <b-col
            v-for="(service, i) in services"
            :key="i"
            cols="12"
            md="4"
            lg="4"
            @mouseenter="service.hover = true"
            @mouseleave="service.hover = false"
            class="mb-2"
          >
            <b-overlay no-center :show="service.hover">
              <template v-slot:overlay>
                <div
                  style="width: 100%; height: 100%;"
                  class="d-flex justify-content-center flex-column p-5"
                >
                  <b-button variant="primary" @click="$router.push('/services')"
                    >المزيد</b-button
                  >
                </div>
              </template>
              <div>
                <b-card no-body style="min-height: 384px">
                  <b-card-body class="d-flex flex-column  ">
                    <b-card-img
                      class="mx-auto mb-2"
                      style="width: auto; max-height: 300px; max-width: 100%  "
                      :src="service.image"
                    />
                    <b-card-title class="mt-auto">{{
                      service.name
                    }}</b-card-title>
                  </b-card-body>
                </b-card>
              </div>
            </b-overlay>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      test: require('@/assets/motor.jpg'),
      products: [
        {
          name: 'مواتير الغاطس',
          image: require('@/assets/motor.jpg'),
          hover: false,
        },
        {
          name: 'طلمبات الأعماق',
          image: require('@/assets/tolombat.jpg'),
          hover: false,
        },
        {
          name: 'كبلات بحرية',
          image: require('@/assets/cabel.jpg'),
          hover: false,
        },
        {
          name: 'لوحه الكنترول',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'مولد كهباء',
          image: require('@/assets/moled.jpg'),
          hover: false,
        },
        {
          name: 'جربوكسات',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'المواسير',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'فلنشات',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'الواح طاقه شمسيه',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'اكسات',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
      ],
      services: [
        {
          name: 'صيانه طلمبات أعماق',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'صيانه مواتير غاطس',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'تطليع و تنزيل طلمبات',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'صيانه لوح كنترول',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'خراطه معادن',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'حفر ابار',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'تطهير ابار',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'لحم معادن',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
        {
          name: 'أوناش',
          image: require('@/assets/placeholder.png'),
          hover: false,
        },
      ],
    }
  },
  methods: {},
})
</script>
