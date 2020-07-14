<template>
  <div>
    <b-jumbotron class="" style="height: 300px; border-radius: 0">
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col
          v-for="(service, i) in services"
          :key="i"
          cols="12"
          @mouseenter="service.hover = true"
          @mouseleave="service.hover = false"
          class="mb-5"
        >
          <div>
            <b-card no-body>
              <b-card-body class="d-flex flex-column flex-lg-row">
                <b-card-img
                  right
                  style="width: auto; max-height: 300px; max-width: 100%"
                  :src="service.image"
                />
                <div class="mr-2">
                  <b-card-title class="m-0 title-underline">{{
                    service.name
                  }}</b-card-title>
                  <p class="text-justify mt-2 text-black font-weight-bold">
                    وحتّى ابتدعها قد حين. قبل تم وحتى الشرقية, لان قد الجنوب
                    الأوروبية،. عن انه إجلاء لفرنسا, ترتيب أسابيع الأمريكي تعد
                    عن, فكان الخطّة والكساد لم قام. تمهيد الصعداء تحت ان. بقصف
                    أصقاع الصينية ٣٠ كما, ضمنها المواد لم فقد. وتم بل تصرّف
                    جديداً التّحول, انتهت الصين الشرق، ولم بـ, عليها رجوعهم
                    لتقليعة دنو أم. أن ثمّة لفشل الى, مكن أن أجزاء وإعلان
                    الباهضة. من وفي أجزاء الأمور وقوعها،, حول بشرية اليابان، بل,
                    بلا أم وبعض المعاهدات. الى ان قبضتهم وصافرات. أي لهذه بوابة
                    بالإنزال لها. أن السادس بالجانب حين. على دفّة مرمى اليابان،
                    مع, فصل وبدون وكسبت الخطّة أي. ٣٠ الساحل وتنامت شموليةً بعض,
                    غير ٣٠ تعداد وتنامت. لكل تعديل وتنامت أم, سابق ارتكبها وفي
                    عن. إذ دار مسارح علاقة. هو الجوي ألمانيا حتى, عل يذكر الحرة
                    وتنامت غير.
                  </p>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Services',
  data() {
    return {
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
})
</script>

<style scoped></style>
