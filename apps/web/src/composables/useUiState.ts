function _useUIState() {
  const route = useRoute()

  const isHeaderDialogOpen = ref(false)

  watch(() => route.path, () => {
    isHeaderDialogOpen.value = true
  })

  return {
    isHeaderDialogOpen,
  }
}

export const useUIState = createSharedComposable(_useUIState)
