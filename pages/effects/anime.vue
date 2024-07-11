<template>

  <NuxtLayout  mode="pad"><section id="waveHero1" class="bg-black  flex items-center text-white p-20">
    <!--  INTRODUCTION SECTION -->

    <div>
      <h1 class="title text-5xl">Nuxt Anime</h1>
      Simple entry animation powered by <a href="https://animejs.com/" target="_blank">animejs</a>
    </div>
  </section>
  </NuxtLayout>

</template>
<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({ targets: '.title', translateX: 250, duration: 800 })
  console.log("r")
})

</script><style scoped>

</style>


