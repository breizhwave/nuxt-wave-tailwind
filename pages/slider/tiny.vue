<template>

  <NuxtLayout mode="pad">
    <!--  INTRODUCTION SECTION -->
    <section id="waveHero1" class="bg-black    items-center text-white p-20 ">https://ganlanyuan.github.io/tiny-slider/
      <div class="waveSlider h-1/2">
        <div class="item" v-for="slide in 6" :key="slide" ><img :src="pathForImage(arrImages[slide])"/></div>

      </div>
    </section>
  </NuxtLayout>
</template>
<script setup>
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
    { name: 'description', content: 'based on tiny slider' }
  ],
  style:[
    {src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css'}
  ],
  script: [

    {   src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js'},
    {   children:` `},

  ]
})

onMounted(() => {

  var slider = tns({
    container: '.waveSlider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });
})
</script>