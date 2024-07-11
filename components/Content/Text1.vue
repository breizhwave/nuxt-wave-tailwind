<template>
   <div class="contentText1"><span v-html="title"/><slot /></div>
</template>
<script setup>defineProps(['title'])</script>
<style  scoped>
*{font-size:20px}
.contentText1 a:link ,
.contentText1 a:visited,
.contentText1 a:hover,
.contentText1 a:active{   //TODO : fix , does not apply
  text-decoration: underline;
  color: red !important;
  font-style: italic;
  font-weight:bold
}
</style>