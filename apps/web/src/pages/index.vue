<template>
  <UContainer class="min-h-[inherit] flex flex-col justify-center items-center">
    <div class="text-center py-24">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white sm:text-7xl max-w-screen-lg">
        {{ $t('pages.index.hero.title1') }} <span class="text-primary">{{ $t('pages.index.hero.title2') }}</span>
      </h1>
      <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 max-w-screen-md">
        {{ $t('pages.index.hero.description') }}
      </p>

      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <UButton color="primary" size="lg" icon="heroicons:squares-2x2-16-solid">
          {{ $t('pages.index.hero.button') }}
        </UButton>
        <UButton color="gray" size="lg" variant="ghost" icon="heroicons:arrow-long-right" trailing>
          {{ $t('pages.index.hero.github') }}
        </UButton>
      </div>
      <div class="mt-16">
        <EActivity />
      </div>
    </div>
  </UContainer>
</template>
