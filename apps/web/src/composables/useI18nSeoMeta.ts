import type { UseSeoMetaInput } from '@unhead/vue'
import type { BreadcrumbLink } from '#ui/types'

interface I18nSeoMetaOptions {
  meta: Omit<UseSeoMetaInput, 'titleTemplate'>
  breadcrumbs?: BreadcrumbLink[]
}

interface I18nSeoMeta {
  meta: ComputedRef<Record<keyof I18nSeoMetaOptions['meta'], string>>
  breadcrumbs: ComputedRef<BreadcrumbLink[]>
}

interface BreadcrumbSegment {
  key: string
  route: string
}

function pathBreadcrumbSegments(path: string, root: string): BreadcrumbSegment[] {
  const segments: BreadcrumbSegment[] = []

  const pathStack = path
    .replace(root, '')
    .split('/')
    .filter(Boolean)
    .slice(0, -1)

  while (pathStack.length > 0) {
    segments.push({
      key: pathStack.join('.'),
      route: root + pathStack.join('/'),
    })

    pathStack.pop()
  }

  return segments.reverse()
}

export function useI18nSeoMeta(options: I18nSeoMetaOptions): I18nSeoMeta {
  const router = useRouter()
  const { t, locale, defaultLocale } = useI18n()

  const normalizedMeta = computed(() => {
    const entries = Object
      .entries(options.meta)
      .map(([key, value]) => {
        return [key, toValue(value)]
      })

    return Object.fromEntries(entries)
  })

  const breadcrumbs = computedWithControl(router.currentRoute, () => {
    if (options?.breadcrumbs) {
      return options.breadcrumbs
    }

    const rootPath = defaultLocale === locale.value ? '/' : `/${locale.value}/`

    const breadcrumbs: BreadcrumbLink[] = [{
      label: t('home.breadcrumb'),
      to: rootPath,
    }]

    const segments = pathBreadcrumbSegments(router.currentRoute.value.path, rootPath)
    for (const segment of segments) {
      breadcrumbs.push({
        label: t(`${segment.key}.breadcrumb`),
        to: segment.route,
      })
    }

    breadcrumbs.push({
      label: normalizedMeta.value.title,
    })

    return breadcrumbs
  })

  useSeoMeta({
    ...options.meta,
    titleTemplate: (title) => {
      const postfix = t('app.title')

      return title ? `${title} | ${postfix}` : postfix
    },
  })

  return {
    meta: normalizedMeta,
    breadcrumbs,
  }
}
