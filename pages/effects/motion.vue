<template>

  <NuxtLayout  mode="pad"><section   class="bg-black w-full flex items-center text-white p-10 ">
    <!--  INTRODUCTION SECTION -->

    <div class="w-full place-content-center">
<ContentTitle1 class="w-full text-center">
     scroll based animations with Motion library</ContentTitle1>
      <ContentText1 class='max-w-screen-sm text-justify mx-auto'>
        the  <a href="https://motion.dev/" target="_blank">motion</a> library combined with scroll reactivity allow user interactive nice animations.
        the example above is featured on motion dev website and I have modified it to set horizontal movement. <br>
        <a href="https://codesandbox.io/s/motion-one-parallax-0nr3or?from-embed=&file=/index.html:450-1038" target="_blank">
          Check it out on stackblitz</a>
      </ContentText1>

      <section class="motion  items-center w-full" v-for="slide in 6" :key="slide"  >
        <div class=" items-center ">
          <img :src="pathForImage(arrImages[slide])" />
          <h2>#000{{ slide }}</h2>
        </div>
      </section>


      <div class="progress"></div>
    </div>
  </section>
  </NuxtLayout>

</template>
<script setup lang="ts">
import { animate, scroll } from "motion";
function pathForImage(filename) { return "/images/slider/" + filename;}
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
onMounted(() => {
  scroll(animate(".progress", { scaleX: [0, 1] }));

  document.querySelectorAll("section.motion").forEach((section, index) => {
    const header = section.querySelector("h2");
    let waveOffset=-400
    if (index%2==1) waveOffset = 400;
    scroll(animate(header, { x: [waveOffset, 0] }), {
      target: header
    });
  });
})

</script><style scoped>

 
html {
  scroll-snap-type: y mandatory;
}


.motion h2 {
  margin: 0;

  font-size: 50px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.2;
  position: absolute;
  display: inline-block;
  top: calc(50% - 25px);
  left: calc(50% + 120px);
}
section.motion {
  height: 100vh;

  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}


section.motion > div {

  margin: 20px;
  background: white;
  overflow: hidden;
}


.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: white;
  bottom: 50px;
  transform: scaleX(0);
}

</style>


