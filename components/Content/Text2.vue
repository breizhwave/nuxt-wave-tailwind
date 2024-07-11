<template>
     <span v-html="title"/><slot />
</template>
<script setup>defineProps(['title'])</script>