<script setup>
import ListagemProdutos from '@/components/ListagemProdutos.vue';
// import MenuSuperior from '@/components/MenuSuperior.vue';
import RodaPe from '@/components/RodaPe.vue';
import RodaPeMobile from '@/components/RodaPeMobile.vue';
import { useScreen } from '@/composables/screen';

const {isMobile} = useScreen()

</script>

<template>
  <MenuSuperior />
  <ListagemProdutos />
  <RodaPe v-if="!isMobile"/>
  <RodaPeMobile v-else/>
</template>