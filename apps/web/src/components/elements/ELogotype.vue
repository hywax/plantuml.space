<template>
  <div class="flex items-center gap-1.5">
    <NuxtLink :to="localePath('/')" class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-center">
      Plant<span class="text-primary">UML</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
