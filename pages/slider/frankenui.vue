<template>

  <NuxtLayout mode="pad">
    <!--  INTRODUCTION SECTION -->
    <section id="waveHero1" class="bg-black    items-center text-white p-20 ">
      <span class="uk-badge text-white">1</span>
      <span class="uk-badge text-white">100</span>
      <div class="uk-position-relative  " tabindex="-1" uk-slider>
        <div
            class="uk-child-width-1-3@s uk-child-width-1-4@m uk-slider-items uk-child-width-1-2"
        >
        <div    v-for="slide in 6" :key="slide" >  <img :src="pathForImage(arrImages[slide])"/></div>


          </div>
        <a
            class="uk-position-center-left  uk-slidenav-large bg-white"
            href
            uk-slidenav-previous
            uk-slider-item="previous"
        ></a>
        <a
            class="uk-position-center-right uk-slidenav-large bg-white"
            href
            uk-slidenav-next
            uk-slider-item="next"
        ></a>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
const arrImages=
    [
      "wave-slider-0587.jpg",
      "wave-slider-0898.jpg",
      "wave-slider-3526.jpg",
      "wave-slider-3786.jpg",
      "wave-slider-6586.jpg",
      "wave-slider-7377.jpg",
      "wave-slider-7379.jpg"
    ];
function pathForImage(filename) { return "/images/slider/" + filename;}
useHead({
  title: 'TAILWIND SLIDER',
  meta: [
    { name: 'description', content: 'based on frankeniu slider slider' }
  ]
  // style:[
  //   {src: 'https://unpkg.com/franken-ui-releases@0.0.13/dist/default.min.css'}
  // ],
  // script: [
  //
  //   {   src: 'https://cdn.jsdelivr.net/npm/uikit@3.21.5/dist/js/uikit.min.js'},
  //   {   children:` `},
  // ]
})

onMounted(() => {
  UIkit.notification('Hello world.');
})
</script>