import Head from 'next/head'
import { Main, Hero } from 'templates'
import { Header, ExerciseWeapons, pages } from 'modules/Calculators'
import { GetStaticProps } from 'next'
import { useTranslations } from 'contexts/useTranslation'
import { buildUrl, buildPageTitle } from 'utils'
import { routes, jsonld } from 'Constants'
import { common, calculators } from 'locales'

const pageUrl = buildUrl(routes.IMBUEMENTS_COST)
const { hero } = pages.ImbuementsCost

export default function Calculator() {
  const { translations } = useTranslations()

  const pageTitle = buildPageTitle(
    translations.calculators.Meta.ImbuementsCost.title,
  )

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />

        <meta
          name="description"
          content={translations.calculators.Meta.ImbuementsCost.description}
        />
        <meta
          property="twitter:description"
          content={translations.calculators.Meta.ImbuementsCost.description}
        />
        <meta
          property="og:description"
          content={translations.calculators.Meta.ImbuementsCost.description}
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link
          rel="alternate"
          hrefLang="pt"
          href={buildUrl(routes.IMBUEMENTS_COST, 'pt')}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={buildUrl(routes.IMBUEMENTS_COST, 'es')}
        />
        <link
          rel="alternate"
          hrefLang="pl"
          href={buildUrl(routes.IMBUEMENTS_COST, 'pl')}
        />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: jsonld.standard,
          }}
        />
      </Head>

      <Main>
        <Header />
        <Hero
          title={translations.calculators.Meta.ImbuementsCost.title}
          src={hero}
          offset
        />
        <ExerciseWeapons />
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    translations: {
      common: common[locale as RegisteredLocale],
      calculators: calculators[locale as RegisteredLocale],
    },
  },
})
