<template>
  <div v-if="links?.length" class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
    <template v-for="(link, index) in links" :key="index">
      <ULink
        :to="link.to"
        class="flex items-center gap-1.5 group"
        active-class="text-primary font-medium border-current"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
      >
        <UIcon v-if="link.icon" :name="link.icon" class="w-6 h-6 flex-shrink-0 rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background" />
        <span class="text-sm/6 truncate">{{ link.label }}</span>
      </ULink>
    </template>
  </div>
</template>

<script setup lang="ts">
interface NavigationLink {
  label: string
  to: string
  icon?: string
  description?: string
  children?: Omit<NavigationLink, 'children'>[]
}

interface Props {
  simple?: boolean
  links: NavigationLink[]
}

defineProps<Props>()
</script>
