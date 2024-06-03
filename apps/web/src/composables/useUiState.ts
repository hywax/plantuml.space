function _useUIState() {
  const isHeaderDialogOpen = ref(false)

  return {
    isHeaderDialogOpen,
  }
}

export const useUIState = createSharedComposable(_useUIState)
