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
    <b-container class="h-100">
      <b-row>
        <b-col
          v-for="(product, i) in productsC"
          :key="i"
          cols="12"
          md="4"
          lg="4"
        >
          <b-card no-body style="min-height: 384px">
            <b-card-body class="d-flex flex-column  ">
              <b-card-img-lazy
                class="mx-auto mb-2"
                style="width: auto; max-height: 300px; max-width: 100%  "
                :src="product.images[0]"
              />
              <b-card-title class="mt-auto">{{ product.name }}</b-card-title>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { db } from '@/firebase/firebaseConfig';

export default defineComponent({
  name: 'Products',
  firestore: {
    productsC: db.collection('Products'),
  },
  setup() {
    const productsC = ref<any>([]);

    return {
      productsC,
    };
  },
});
</script>

<style scoped></style>
