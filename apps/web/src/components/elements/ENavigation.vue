<template>
  <ul v-if="links?.length" class="flex items-center gap-x-8">
    <li v-for="(link, index) of links" :key="index" class="relative">
      <UPopover v-if="link.children?.length" mode="hover">
        <template #default="{ open }">
          <ULink
            :to="link.to"
            class="text-sm/6 font-semibold flex items-center gap-1"
            active-class="text-primary"
            inactive-class="hover:text-primary"
          >
            {{ link.label }}
            <UIcon
              :name="open ? 'heroicons:chevron-up-20-solid' : 'heroicons:chevron-down-20-solid'"
              class="w-5 h-5 transform transition-transform duration-200 flex-shrink-0"
              :class="open ? 'rotate-180' : ''"
            />
          </ULink>
        </template>

        <template #panel="{ close }">
          <div class="p-2 space-y-1 flex flex-wrap w-[30rem]">
            <ULink
              v-for="(child, key) of link.children"
              :key="key"
              :to="child.to"
              class="px-2 py-1.5 rounded-md flex items-start gap-1.5 w-1/2"
              active-class="bg-gray-100/50 dark:bg-gray-800/50 text-primary"
              inactive-class="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              @click="close"
            >
              <UIcon
                v-if="child.icon"
                :name="child.icon"
                class="w-4 h-4 flex-shrink-0 mt-1"
              />

              <p>
                <span class="font-semibold text-sm/6 inline-block relative">
                  {{ child.label }}
                </span>
                <span v-if="child.description" class="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                  {{ child.description }}
                </span>
              </p>
            </ULink>
          </div>
        </template>
      </UPopover>
      <ULink
        v-else
        :to="link.to"
        class="text-sm/6 font-semibold flex items-center gap-1"
        active-class="text-primary"
        inactive-class="hover:text-primary"
      >
        {{ link.label }}
      </ULink>
    </li>
  </ul>
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
