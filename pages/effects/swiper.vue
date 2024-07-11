<template>

  <NuxtLayout mode="pad">
<!--  INTRODUCTION SECTION -->
<section id="waveHero1" class="bg-black  flex items-center text-white ">



<!--    <div class="swiper">-->
<!--      &lt;!&ndash; Additional required wrapper &ndash;&gt;-->
<!--      <div class="swiper-wrapper">-->
<!--        &lt;!&ndash; Slides &ndash;&gt;-->
<!--        <div class="swiper-slide">Slide 1</div>-->
<!--        <div class="swiper-slide">Slide 2</div>-->
<!--        <div class="swiper-slide">Slide 3</div>-->
<!--        ...-->
<!--      </div>-->
<!--      &lt;!&ndash; If we need pagination &ndash;&gt;-->
<!--      <div class="swiper-pagination"></div>-->

<!--      &lt;!&ndash; If we need navigation buttons &ndash;&gt;-->
<!--      <div class="swiper-button-prev"></div>-->
<!--      <div class="swiper-button-next"></div>-->

<!--      &lt;!&ndash; If we need scrollbar &ndash;&gt;-->
<!--      <div class="swiper-scrollbar"></div>-->
<!--    </div>-->

<div class="bg-black">
        <Swiper
            :modules="[SwiperAutoplay, SwiperNavigation]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"

            :autoplay="{
      delay: 1500,
      disableOnInteraction: true,

    }" ,
            :navigation="{
            nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  }"

       >
          <SwiperSlide v-for="slide in 6" :key="slide"  >
            <strong><img :src="pathForImage(arrImages[slide])"/></strong>
          </SwiperSlide>  <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </Swiper>


  </div>

</section>


  </NuxtLayout>

</template>
<script setup lang="ts" >
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

// const getImageUrl = (imagename) => { const imageUrl = new URL(`/assets/img/${imagename}`, import.meta.url).href; return imageUrl; };
function pathForImage(filename) { return "/images/slider/" + filename;} // TODO : global path for image
useHead({
  // title: 'My App',
  // meta: [
  //   { name: 'description', content: 'My amazing site.' }
  // ],
  // bodyAttrs: {
  //   class: 'test'
  // },
  // script: [
  //
  //   {   src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',},
  //
  // ]
})
</script>


<style>
.swiper-slide img {
  width: 100%;
  display: block;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vw;
  width: 100vw;
}


</style>
