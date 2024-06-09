import { FC } from 'react'

type ArticleShortType = {
  icon: string
  iconColor?: string
  title: string
  text: string
  date: string
  source?: string
  sourceLink?: string
  isNew?: boolean
}

const ArticleShort: FC<ArticleShortType> = ({
  icon,
  iconColor,
  title,
  text,
  date,
  source,
  sourceLink,
  isNew
}) => {
  const getColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-200'
      case 'green':
        return 'bg-green-200'
      default:
        return 'bg-neutral-200'
    }
  }

  const color = iconColor ? getColor(iconColor) : 'bg-neutral-200'
  return (
    <div className="flex flex-row gap-2.5 pt-4 text-neutral-700 first:pt-0">
      <div
        className={` flex size-8 min-w-8 items-center justify-center rounded-full
          ${color}
        `}
      >
        <img
          src={`src/assets/icons/${icon}.svg`}
          alt={icon}
          title={icon}
          className="size-5 min-w-5"
        />
      </div>
      <div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-row items-center text-sm font-medium">
              {title}
              {isNew ? (
                <img
                  src={`src/assets/icons/blueDot.svg`}
                  alt="new"
                  title="new"
                  className="ms-1 size-2"
                />
              ) : null}
            </div>
            <div className="pt-1.5 text-sm leading-120">{text}</div>
            <div className="text-[13px]/[13px] text-neutral-400">
              {date}
              {source ? (
                sourceLink ? (
                  <>
                    {' - '}
                    <a
                      href={sourceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      {source}
                    </a>
                  </>
                ) : (
                  <>
                    {' - '}
                    {source}
                  </>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleShort
