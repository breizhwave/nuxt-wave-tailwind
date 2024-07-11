<template>
  <h2  data-aos="fade-right" class="     align-middle text-xl ">
  <span v-html="title"/><slot/></h2>
</template>
<script setup>defineProps(['title'])</script>