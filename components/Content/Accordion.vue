<template>
  <li class="relative border-b-2 border-gray-200">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="text-base">{{ accordion.title }}</span>
        <wave-icon name="chevronUp" v-if="selected"   />
        <wave-icon name="chevronDown" v-else  />
      </div>
    </button>


      <div v-if="selected" class="relative overflow-hidden transition-all " style="">
        <div class="py-2">
          <p class="text-sm text-gray-700 tracking-wide leading-relaxed">
            {{ accordion.description }}
          </p>
        </div>
      </div>

  </li>
</template>
<script>
export default {
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,

    }
  },
}
</script>
