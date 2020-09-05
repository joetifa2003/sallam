<template>
  <b-container class="h-100 d-flex flex-column justify-content-center">
    <b-card no-body>
      <b-card-body>
        <b-card-title>اضافه منتج</b-card-title>
        <b-form ref="form">
          <b-col>
            <b-form-group label="صور المنتج">
              <b-form-file multiple v-model="images" />
            </b-form-group>
          </b-col>
          <b-row>
            <b-col>
              <b-form-group label="نوع المنتج">
                <b-form-select
                  v-model="selectedProduct"
                  :options="productSelect"
                  placeholder="نوع المنتج"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="حاله المنتج">
                <b-form-select
                  v-model="productState"
                  :options="productStateSelect"
                  placeholder="حاله المنتج"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="w-100 mb-4">
            <b-col cols="12" md="6">
              <b-form-group label="اسم المنتج">
                <b-input
                  v-model="productName"
                  placeholder="اسم المنتج"
                  id="productName"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label="اسم الشركه المصنعه">
                <b-input
                  v-model="productCompany"
                  placeholder="اسم الشركه المصنعه"
                  id="productCompany"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6" v-for="(spec, i) in selectedProduct.specs" :key="i">
              <b-form-group
                :label="
                  `${spec.name} ${spec.unit.length > 0 ? `(${spec.unit})` : ''}`
                "
              >
                <b-input v-model="spec.value" :placeholder="spec.name" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-overlay
            :show="uploadingProduct"
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
          >
            <b-btn
              :disabled="uploadingProduct"
              variant="primary"
              @click="addProduct"
              >اضافه المنتج</b-btn
            >
          </b-overlay>
        </b-form>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { Product, ProductStates, ProductTypes } from '@/classes/Product';
import Spec from '@/classes/Spec';
import uid from 'uid';
import { db, st } from '@/firebase/firebaseConfig';
import imageCompression from 'browser-image-compression';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'AddProduct',
  setup() {
    const productName = ref('');
    const productCompany = ref('');
    const productSelect = ref([
      {
        value: {
          type: ProductTypes.MOTOR,
          specs: [
            new Spec('Amber per second', '', ''),
            new Spec('Kilowatts', '', ''),
            new Spec('RPM', '', ''),
            new Spec('Horse power', '', ''),
            new Spec('Volts', '', ''),
            new Spec('Hertz', '', ''),
          ],
        },
        text: 'مواتير غاطس',
      },
      {
        value: {
          type: ProductTypes.TOLOMBA,
          specs: [
            new Spec('Number of stages', '', ''),
            new Spec('Diameter', '', ''),
            new Spec('Amber', '', ''),
            new Spec('Hertz', '', ''),
          ],
        },
        text: 'طلمبة اعماق',
      },
      {
        value: {
          type: ProductTypes.CABLE,
          specs: [new Spec('Size', '', ''), new Spec('Cable type', '', '')],
        },
        text: 'كبل',
      },
      {
        value: {
          type: ProductTypes.CONTROL_PANEL,
          specs: [
            new Spec('Control panel type', '', ''),
            new Spec('Horse power', '', ''),
            new Spec('Components type', '', ''),
            new Spec('Components', '', ''),
          ],
        },
        text: 'لوحه كنترول',
      },
      {
        value: {
          type: ProductTypes.GENERATOR,
          specs: [new Spec('Horse power', '', '')],
        },
        text: 'مولدات الكهرباء',
      },
      {
        value: {
          type: ProductTypes.GARBOX,
          specs: [new Spec('Kilowatts', '', '')],
        },
        text: 'جربوكسات',
      },
      {
        value: {
          type: ProductTypes.PUMP,
          specs: [new Spec('Height', '', ''), new Spec('Diameter', '', '')],
        },
        text: 'مواسير',
      },
    ]);
    const productStateSelect = ref([
      {
        value: ProductStates.NEW,
        text: 'جديد',
      },
      {
        value: ProductStates.USED,
        text: 'مستعمل',
      },
    ]);
    const selectedProduct: Ref<{ type: ProductTypes; specs: Spec[] }> = ref({
      type: ProductTypes.MOTOR,
      specs: [],
    });
    const productState = ref<ProductStates>(ProductStates.NEW);

    const images = ref<File[]>([]);

    const uploadingProduct = ref(false);

    const form = ref<any>(null);

    async function addProduct() {
      uploadingProduct.value = true;
      const _images: string[] = [];
      for (const image of images.value) {
        const fileExtension = image.name.split('.').pop();
        const fileName = `${productName.value.replace(
          new RegExp(/\s/g),
          '+',
        )}-${uid()}.${fileExtension}`;
        const compressedImage = await imageCompression(image, {
          useWebWorker: true,
          maxSizeMB: 1,
        });
        const uploadTask = await st
          .ref(`Products/${fileName}`)
          .put(compressedImage);
        const downloadUrl = await uploadTask.ref.getDownloadURL();
        _images.push(downloadUrl);
      }
      const product = new Product(
        selectedProduct.value.type,
        productName.value,
        productCompany.value,
        productState.value,
        selectedProduct.value.specs,
        _images,
      );
      await db.collection('Products').add(product.toPlainObj());
      uploadingProduct.value = false;
      form.value.reset();
      await Swal.fire('Product uploaded successfully', '', 'success');
    }

    return {
      productName,
      productCompany,
      productStateSelect,
      productState,
      productSelect,
      selectedProduct,
      images,
      addProduct,
      uploadingProduct,
      form,
    };
  },
});
</script>

<style scoped></style>
