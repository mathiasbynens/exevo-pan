import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { transformer } from 'server/utils'
import type { AppRouter } from 'pages/api/trpc/[trpc]'

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  ssr: false,
})
