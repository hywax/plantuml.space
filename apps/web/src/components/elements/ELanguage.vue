<template>
  <div v-if="inline" class="flex gap-1.5">
    <UButton
      v-for="(item, key) in items" :key="key"
      variant="ghost"
      color="gray"
      :aria-label="$t('elements.language.select', [item.label])"
      :disabled="item.disabled"
      :icon="item.icon"
      :to="item.to"
    />
  </div>
  <UDropdown
    v-else
    :items="[items]"
    mode="hover"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'auto', openDelay: 0 }"
  >
    <UButton
      icon="heroicons:language-20-solid"
      variant="ghost"
      color="gray"
      :aria-label="$t('elements.language.title')"
    />

    <template #item="{ item }">
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500" />
      <span class="truncate">{{ item.label }}</span>
    </template>
  </UDropdown>
</template>

<script setup lang="ts">
import type { DropdownItem } from '#ui/types'

interface Props {
  inline?: boolean
}

withDefaults(defineProps<Props>(), {
  inline: false,
})

const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const localeIconMap = {
  en: 'emojione:flag-for-united-states',
  zh: 'emojione:flag-for-china',
  ru: 'emojione:flag-for-russia',
  hi: 'emojione:flag-for-india',
} as const

const items = computed(() => {
  return locales.value.map<DropdownItem>((loc) => {
    return {
      label: loc.name || loc.code,
      icon: localeIconMap[loc.code as keyof typeof localeIconMap],
      to: switchLocalePath(loc.code),
      disabled: loc.code === locale.value,
    }
  })
})
</script>
