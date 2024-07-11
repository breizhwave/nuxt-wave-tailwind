<template>


  <li class="relative group">
    <button
        class="md:px-4 py-2  bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
        @click="dropdownToggler"  @blur="dropdownToggler" >
      <span class="mr-1"><a  :href="url">  {{ name }}</a></span>

      <WaveIcon name="chevronUp"  v-if="dropdownNavbar"/>
      <WaveIcon  v-else  name="chevronDown"  />


    </button>

    <ul
        v-if="dropdownNavbar"
        class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
    >
      <slot/>

    </ul>

  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

data() {
  return {

    dropdownNavbar: false,
  }
},
methods: {
  dropdownToggler () {
    this.dropdownNavbar = !this.dropdownNavbar
  }
}

}
</script><style scoped>ul {width:200px}</style>