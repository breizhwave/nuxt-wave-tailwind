<template>
  <h1  class="       align-middle text-5xl "   >
  <span v-html="title"/><slot/></h1>
</template>
<script setup>defineProps(['title'])</script>