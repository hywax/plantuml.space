<template>
  <div>
    <UBreadcrumb v-if="breadcrumbs?.length" :links="breadcrumbs" class="mb-3">
      <template #divider>
        <UIcon name="uiw:right" />
      </template>
    </UBreadcrumb>

    <h1 v-if="$slots.title || title" class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
      <slot name="title">
        {{ title }}
      </slot>
    </h1>
    <p v-if="$slots.description || description" class="mt-4 text-lg/8 text-gray-500 dark:text-gray-400 max-w-screen-md">
      <slot name="description">
        {{ description }}
      </slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'

interface Props {
  title?: string
  description?: string
  breadcrumbs?: BreadcrumbLink[]
}

defineProps<Props>()
</script>
