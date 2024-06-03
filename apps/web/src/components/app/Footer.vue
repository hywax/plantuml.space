<template>
  <footer class="h-[--footer-height]">
    <UContainer class="py-4 flex items-center justify-between gap-x-3">
      <div class="flex items-center justify-center lg:justify-start lex-1 gap-x-1.5">
        <p class="text-gray-500 dark:text-gray-400 text-sm/6 truncate">
          {{ $t('app.footer.copyright') }}

          <ClientOnly>
            <UTooltip :text="$t('app.footer.personal')">
              <ULink class="text-gray-900 dark:text-white" :to="config.public.authorUrl" target="_blank">
                @hywax
              </ULink>
            </UTooltip>

            <template #fallback>
              <span>@hywax</span>
            </template>
          </ClientOnly>
          <span class="hidden md:inline">. {{ $t('app.footer.epistle') }}.</span>
        </p>
      </div>
      <div class="flex-1 flex items-center justify-end gap-x-1.5">
        <UTooltip :text="$t('app.footer.boosty')">
          <UButton icon="simple-icons:boosty" color="gray" variant="ghost" :aria-label="$t('app.footer.boosty')" :to="config.public.boostyUrl" target="_blank" rel="nofollow" />
        </UTooltip>
        <UTooltip :text="$t('app.footer.github')">
          <UButton icon="simple-icons:github" color="gray" variant="ghost" :aria-label="$t('app.footer.github')" :to="config.public.repositoryUrl" target="_blank" rel="nofollow" />
        </UTooltip>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
