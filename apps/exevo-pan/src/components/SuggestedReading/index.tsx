import { useTranslations } from 'contexts/useTranslation'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from 'Constants'

type SuggestedReadingProps = Pick<BlogPost, 'thumbnail' | 'title' | 'slug'> &
  JSX.IntrinsicElements['div']

const SuggestedReading = ({
  thumbnail,
  title,
  slug,
  ...props
}: SuggestedReadingProps) => {
  const {
    translations: { common },
  } = useTranslations()
  return (
    <div {...props}>
      <p className="mb-2 text-xs tracking-wide">
        {common.SuggestedReading.miniTitle}
      </p>

      <Link className="group" href={`${routes.BLOG}/${slug}`}>
        <div className="card flex items-center gap-2.5 px-2.5 py-2">
          <div className="bg-primaryVariant relative top-0 rounded-md p-1 transition-all group-hover:-top-0.5">
            <Image
              src={thumbnail}
              width={32}
              height={32}
              alt={title}
              unoptimized
            />
          </div>

          <h5 className="text-base">{title}</h5>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedReading
