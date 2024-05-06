<template>


<!--  INTRODUCTION SECTION -->
<section id="waveHero1" class="cover-gradient-2 h-screen">
  <base-section>
  <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
          >web services for tomorrow</span
          >
  <h1
      data-aos="fade-right"
      data-aos-once="true"
      class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
  >
    The World's <span class="text-header-gradient">Fastest Growing</span>    CMS Web App
  </h1>

    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class=" text-base paragraph hidden sm:block">
      create content online <br>and start selling now.
    </p>
    <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="700"
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
    >
      <BaseButton
          class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
      >
        Get Started
      </BaseButton>
      <BaseButton
          class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
      >
        <span>Download App</span>&nbsp;
        <WaveIcon    name="chevronDown" color="blue"   />
      </BaseButton>
    </div>

  </div>


    <div class="hidden   col-span-12 lg:col-span-6 sm:flex items-center  ">

        <img
            data-aos="fade-up"
            data-aos-once="true"
            src="/assets/img/illustrations/undraw_world_re_768g.svg"
            class="   "
            alt=""
        />

    </div>
    <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="/assets/img/pattern/ellipse-1.png"
        class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
    />
    <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="/assets/img/pattern/ellipse-2.png"
        class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
    />
    <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="/assets/img/pattern/ellipse-3.png"
        class="hidden sm:block absolute bottom-56 right-24 w-6"
    />
    <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="/assets/img/pattern/star.png"
        class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
    /></base-section>
</section>



  <!-- Credit card section -->
  <section class="w-full my-36">
    <BaseSection data-aos="fade-down">
      <div class="col-span-12 lg:col-span-7">
        <div class="w-full">
          <img src="/assets/img/illustrations/card-section.png" class="w-[95%]" alt="" />
        </div>
      </div>
      <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
        <h2 class="text-4xl font-semibold">
          Introducing the <span class="text-header-gradient"> list </span>  element
        </h2>
        <p class="paragraph"> custom VUE element.</p>
        <ul class="space-y-4 sm:space-y-2">
          <ContentListItem title="simple list icon element" color="red"/>
          <ContentListItem title="customize color if necessary" color="blue" />
          <ContentListItem title="and lots more .." />
        </ul>
        <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
        >download</BaseButton
        >
      </div>
    </BaseSection>
  </section>






</template>
<script setup lang="ts">
</script><style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>