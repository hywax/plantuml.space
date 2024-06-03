<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UToggle
      v-if="switchMode"
      v-model="isDark"
      on-icon="heroicons:moon-20-solid"
      off-icon="heroicons:sun-20-solid"
      :aria-label="areaLabel"
    />
    <UTooltip v-else :text="areaLabel">
      <UButton
        :icon="isDark ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'"
        :aria-label="areaLabel"
        variant="ghost"
        color="gray"
        @click="isDark = !isDark"
      />
    </UTooltip>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Props {
  switchMode?: boolean
}

withDefaults(defineProps<Props>(), {
  switchMode: false,
})

const colorMode = useColorMode()
const { t } = useI18n()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const areaLabel = computed(() => isDark.value ? t('elements.toggleTheme.light') : t('elements.toggleTheme.dark'))
</script>
