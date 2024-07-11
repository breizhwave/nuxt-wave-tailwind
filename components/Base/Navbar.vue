<template>
  <nav id="navbar" class="  z-10 w-full text-neutral-800 fixed top-0 bg-white shadow  " :class="mode=='full'?' opacity-80':''">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-1">
          <div><a href="/">
            <img src="~/assets/img/logo/wave-2024-2.png" class="w-24 xl:w-28" alt="Welcome to  wave.bzh" /></a>
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <WaveIcon name="menu"  v-if="!open"/>
            <WaveIcon  v-else name="close"  />
          </button>
        </div>
        <ul
            :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <BaseNavLinkDropDown name="Effects" url="#">
            <BaseNavLink name="Swiper Slider" url="/effects/swiper"   class=" py-2     text-gray-700 hover:bg-gray-100"  />
            <BaseNavLink name="animejs" url="/effects/anime"   class=" py-2     text-gray-700 hover:bg-gray-100"  />
            <BaseNavLink name="motion" url="/effects/motion"   class=" py-2     text-gray-700 hover:bg-gray-100"  />
<!--            <BaseNavLink name="Tiny Slider" url="/slider/tiny"   class=" py-2     text-gray-700 hover:bg-gray-100"  />-->
<!--            <BaseNavLink name="FANKENUI" url="/slider/frankenui"   class=" py-2     text-gray-700 hover:bg-gray-100"  />-->
          </BaseNavLinkDropDown>

          <BaseNavLink name="Templates" url="#" />
          <BaseNavLink name="Studio" url="#" />
          <BaseNavLink name="Portfolio" url="#" />
          <BaseNavLinkDropDown name="About" url="/about">
            <BaseNavLink name="Company" url="#"   class=" py-2     text-gray-700 hover:bg-gray-100"  />
            <BaseNavLink name="Investors" url="#"   class=" py-2     text-gray-700 hover:bg-gray-100"  />
            <BaseNavLink name="Contact" url="#"   class=" py-2     text-gray-700 hover:bg-gray-100"  />

          </BaseNavLinkDropDown>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <base-button class="px-4  w-15  py-1 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          fr
        </base-button>
        <base-button class="px-4 w-150   py-1 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
          en
        </base-button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">

enum Modes {
  'full',
  'pad'
}
export default {
  name: 'BaseNavbar',
  props: { mode:String as ()=>Modes },
  data() {
    return {
      open: false,

    }
  },

}
</script>