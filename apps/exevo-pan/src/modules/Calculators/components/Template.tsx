import { memo } from 'react'
import clsx from 'clsx'
import { Main, SubHeader, Hero } from 'templates'
import { useRoutes } from '../routes'

type ComponentProps = {
  children: React.ReactNode
  currentRoute: string
  mainPage?: boolean
  className?: string
}

const Template = ({
  currentRoute,
  mainPage = false,
  children,
  className,
}: ComponentProps) => {
  const { list, getRoute } = useRoutes()
  const foundRoute = getRoute(currentRoute)

  return (
    <Main>
      <SubHeader navItems={list} />
      {!!foundRoute && (
        <Hero offset title={foundRoute.title} src={foundRoute.hero} />
      )}
      <main
        className={clsx(
          !mainPage &&
            'inner-container grid place-content-start justify-center py-4 md:pt-0',
          className,
        )}
      >
        {children}
      </main>
    </Main>
  )
}

export default memo(Template)
