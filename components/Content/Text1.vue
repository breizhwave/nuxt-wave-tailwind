<template>
   <div class="contentText1"><span v-html="title"/><slot /></div>
</template>
<script setup>defineProps(['title'])</script>
