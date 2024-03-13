import { defineAsyncComponent, onMounted, onUnmounted, ref, shallowRef } from 'vue'

export function useMonitor() {
  const breakpoint = ref('sm')
  const menu = shallowRef(defineAsyncComponent(() => import('../components/MenuSuperiorXs.vue')))
  const footer = shallowRef(defineAsyncComponent(() => import('../components/RodaPeXs.vue')))
  const updateBreakpoint = () => {
    const width = window.innerWidth
    if (width < 576) {
      breakpoint.value = 'xs'
      menu.value = defineAsyncComponent(() => import('../components/MenuSuperiorXs.vue'))
      footer.value = defineAsyncComponent(() => import('../components/RodaPeXs.vue'))
    } else if (width < 768) {
      breakpoint.value = 'sm'
      menu.value = defineAsyncComponent(() => import('../components/MenuSuperiorSm.vue'))
      footer.value = defineAsyncComponent(() => import('../components/RodaPeSm.vue'))
    } else if (width < 992) {
      breakpoint.value = 'md'
      menu.value = defineAsyncComponent(() => import('../components/MenuSuperiorMd.vue'))
      footer.value = defineAsyncComponent(() => import('../components/RodaPeMd.vue'))
    } else if (width < 1200) {
      breakpoint.value = 'lg'
      menu.value = defineAsyncComponent(() => import('../components/MenuSuperiorLg.vue'))
      footer.value = defineAsyncComponent(() => import('../components/RodaPeLg.vue'))
    } else {
      breakpoint.value = 'xl'
      menu.value = defineAsyncComponent(() => import('../components/MenuSuperiorXl.vue'))
      footer.value = defineAsyncComponent(() => import('../components/RodaPeXl.vue'))
    }
  }

  onMounted(() => {
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint)
  })

  return {
    breakpoint,
    menu,
    footer
  }
}
