<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800 sticky top-0 bg-white shadow ">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-1">
          <div>
            <img src="~/assets/img/logo/wave-2024-2.png" class="w-24 xl:w-28" alt="Welcome to  wave.bzh" />
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
          <NavLink name="Components" url="#" />
          <NavLink name="Templates" url="#" />
          <NavLink name="Studio" url="#" />
          <NavLink name="Portfolio" url="#" />
          <li class="relative group">
            <button
                class="md:px-4 py-2  bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                @click="dropdownToggler"
                @blur="dropdownToggler"
            >
              <span class="mr-1">About</span>

              <WaveIcon name="chevronUp"  v-if="dropdownNavbar"/>
              <WaveIcon  v-else  name="chevronDown"  />


            </button>

              <ul
                  v-if="dropdownNavbar"
                  class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Company</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Investors</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
                </li>

              </ul>

          </li>
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
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>