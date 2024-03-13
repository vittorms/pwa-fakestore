<script setup>
import { useMonitor } from '@/composables/monitor'
const { menu, footer } = useMonitor()
</script>

<template>
  <component :is="menu" />
  <RouterView />
  <component :is="footer" />
</template>

<style scoped></style>
