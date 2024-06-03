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

const { t } = useI18n()
const { isHeaderDialogOpen } = useUIState()
const route = useRoute()

watch(() => route.fullPath, () => {
  isHeaderDialogOpen.value = false
})

provideUseId(() => useId())

const links = computed(() => [
  {
    label: t('diagrams.title'),
    to: '/',
    icon: 'heroicons:chart-pie-20-solid',
    children: [
      // {
      //   label: 'Flowcharts',
      //   to: '/',
      //   icon: 'heroicons:chart-pie-20-solid',
      //   description: 'Create flowcharts with ease',
      // },
      // {
      //   label: 'Mindmaps',
      //   to: '/',
      //   icon: 'heroicons:chart-bar-20-solid',
      //   description: 'Create mindmaps with ease',
      // },
      // {
      //   label: 'Wireframes',
      //   to: '/',
      //   icon: 'heroicons:battery-50-20-solid',
      //   description: 'Create wireframes with ease',
      // },
      // {
      //   label: 'Flowcharts',
      //   to: '/',
      //   icon: 'heroicons:chart-pie-20-solid',
      //   description: 'Create flowcharts with ease',
      // },
      // {
      //   label: 'Mindmaps',
      //   to: '/',
      //   icon: 'heroicons:chart-bar-20-solid',
      //   description: 'Create mindmaps with ease',
      // },
      // {
      //   label: 'Wireframes',
      //   to: '/',
      //   icon: 'heroicons:battery-50-20-solid',
      //   description: 'Create wireframes with ease',
      // },
      // {
      //   label: 'Wireframes',
      //   to: '/',
      //   icon: 'heroicons:battery-50-20-solid',
      //   description: 'Create wireframes with ease',
      // },
    ],
  },
  {
    label: t('themes.title'),
    to: '/',
    icon: '',
  },
  {
    label: t('integrations.title'),
    to: '/',
    icon: '',
  },
])
</script>
