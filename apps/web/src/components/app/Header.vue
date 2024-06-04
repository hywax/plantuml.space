<template>
  <header class="h-[--header-height] bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-[--header-height]">
      <div class="md:flex-1">
        <ELogotype />
      </div>
      <div class="hidden md:flex">
        <ENavigation :links="links" />
      </div>
      <div class="flex items-center justify-end md:flex-1 gap-1.5">
        <div class="hidden md:flex items-center">
          <ELanguage />

          <EToggleTheme />
          <div class="h-5 w-px bg-gray-200 dark:bg-gray-800 mx-4" />
        </div>

        <EAccount />

        <UButton
          size="lg"
          color="black"
          variant="ghost"
          class="md:hidden"
          :icon="isHeaderDialogOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
          @click="isHeaderDialogOpen = !isHeaderDialogOpen"
        />
      </div>
    </UContainer>
    <TransitionRoot :show="isHeaderDialogOpen" as="template">
      <Dialog as="div" @close="isHeaderDialogOpen = false">
        <DialogPanel class="fixed inset-0 z-50 overflow-y-auto bg-background md:hidden top-[--header-height]">
          <div class="px-4 sm:px-6 pt-3 pb-6">
            <ENavigationSimple :links="links" />

            <UDivider type="dashed" />

            <div class="my-3">
              <div class="mb-1 text-sm/6 font-semibold truncate">
                {{ $t('elements.language.title') }}
              </div>
              <ELanguage inline />
            </div>

            <div class="my-3">
              <div class="mb-1 text-sm/6 font-semibold truncate">
                {{ $t('elements.toggleTheme.title') }}
              </div>
              <EToggleTheme switch-mode />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, provideUseId } from '@headlessui/vue'
import { useId } from '#imports'

const { isHeaderDialogOpen } = useUIState()
const route = useRoute()

watch(() => route.fullPath, () => {
  isHeaderDialogOpen.value = false
})

provideUseId(() => useId())

const { t } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  {
    label: t('diagrams.title'),
    to: localePath('/diagrams'),
    icon: 'heroicons:chart-pie-20-solid',
    children: [
      {
        label: t('diagrams.sequence.menu.title'),
        description: t('diagrams.sequence.menu.description'),
        to: localePath('/diagrams/sequence'),
        icon: 'heroicons:chart-pie-20-solid',
      },
      {
        label: t('diagrams.usecase.menu.title'),
        description: t('diagrams.usecase.menu.description'),
        to: localePath('/diagrams/usecase'),
        icon: 'heroicons:chart-pie-20-solid',
      },
      {
        label: t('diagrams.class.menu.title'),
        description: t('diagrams.class.menu.description'),
        to: localePath('/diagrams/class'),
        icon: 'heroicons:chart-pie-20-solid',
      },
      {
        label: t('diagrams.activity.menu.title'),
        description: t('diagrams.activity.menu.description'),
        to: localePath('/diagrams/activity'),
        icon: 'heroicons:chart-pie-20-solid',
      },
      {
        label: t('diagrams.component.menu.title'),
        description: t('diagrams.component.menu.description'),
        to: localePath('/diagrams/component'),
        icon: 'heroicons:chart-pie-20-solid',
      },
      {
        label: t('diagrams.state.menu.title'),
        description: t('diagrams.state.menu.description'),
        to: localePath('/diagrams/state'),
        icon: 'heroicons:chart-pie-20-solid',
      },
    ],
  },
  {
    label: t('themes.title'),
    to: localePath('/themes'),
    icon: 'heroicons:chart-pie-20-solid',
  },
  {
    label: t('integrations.title'),
    to: localePath('/integrations'),
    icon: 'heroicons:chart-pie-20-solid',
  },
])
</script>
