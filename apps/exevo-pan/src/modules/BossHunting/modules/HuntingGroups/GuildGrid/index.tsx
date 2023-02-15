import { useState, useMemo } from 'react'
import { Button, Tabs, Input, Paginator, LoadingAlert } from 'components/Atoms'
import { Select } from 'components/Organisms'
import { AddIcon } from 'assets/svgs'
import { useTranslations } from 'contexts/useTranslation'
import { trpc } from 'lib/trpc'
import { useIsMounted } from 'hooks'
import { debounce } from 'utils'
import CreateGuildDialog from './CreateGuildDialog'
import GuildList from './GuildList'
import { GuildGridProps } from './types'

export const PAGE_SIZE = 20
const DEBOUNCE_DELAY = 700

const GuildGrid = ({
  serializableInitialGuildList,
  serverOptions,
}: GuildGridProps) => {
  const [DEFAULT_SERVER] = serverOptions

  const [query, setQuery] = useState({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
    name: '',
    server: DEFAULT_SERVER.value,
  })

  const [isOpen, setOpen] = useState(false)
  const isMounted = useIsMounted()

  const guildList = trpc.listGuilds.useQuery(query, {
    enabled: isMounted,
    staleTime: 5000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    placeholderData: serializableInitialGuildList,
    refetchOnMount: false,
    select: (result) => ({
      ...result,
      page: result.page.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: new Date(createdAt),
      })),
    }),
  })

  return (
    <div className="inner-container grid gap-8 md:-mt-12">
      <Button
        onClick={() => setOpen(true)}
        className="z-1 ml-auto flex w-fit items-center gap-1.5"
      >
        <AddIcon className="-ml-2.5" />
        Create group
      </Button>
      {isOpen && (
        <CreateGuildDialog
          serverOptions={serverOptions}
          onClose={() => setOpen(false)}
        />
      )}

      <section className="grid gap-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="grid w-full grid-cols-2 gap-4 sm:max-w-[380px]">
            <Input
              label="Search by name"
              placeholder="Hunting group name"
              allowClear
              onChange={useMemo(
                () =>
                  debounce(
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuery((prev) => ({
                        ...prev,
                        pageIndex: 0,
                        name: e.target.value,
                      })),
                    DEBOUNCE_DELAY,
                  ),
                [],
              )}
            />
            <Select
              label="Search by server"
              options={serverOptions}
              defaultValue={DEFAULT_SERVER.value}
              onChange={useMemo(
                () =>
                  debounce(
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuery((prev) => ({
                        ...prev,
                        pageIndex: 0,
                        server: e.target.value,
                      })),
                    DEBOUNCE_DELAY,
                  ),
                [],
              )}
            />
          </div>

          <Paginator
            className="ml-auto w-fit"
            pageSize={PAGE_SIZE}
            totalItems={guildList.data?.count ?? 0}
            currentPage={query.pageIndex + 1}
            onChange={(newIndex) =>
              setQuery((prev) => ({ ...prev, pageIndex: newIndex - 1 }))
            }
          />
        </div>
        <Tabs.Group className="-mb-2">
          <Tabs.Panel label="Find groups" />
          <Tabs.Panel label="My groups" />
        </Tabs.Group>
        <GuildList list={guildList.data?.page ?? []} onApply={() => {}} />

        {guildList.isFetching && <LoadingAlert>Loading...</LoadingAlert>}
      </section>
    </div>
  )
}

export default GuildGrid
