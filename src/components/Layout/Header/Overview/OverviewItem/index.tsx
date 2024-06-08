import { FC, ReactNode } from 'react'

type OverviewItemProps = {
  title: string
  description: string
  prefix?: ReactNode
  suffix?: ReactNode
}

const OverviewItem: FC<OverviewItemProps> = ({
  title,
  description,
  prefix,
  suffix
}) => {
  return (
    <div className="flex flex-col gap-5 text-nowrap px-2 xl:px-5">
      <div className="text-[13px] leading-[13px] text-neutral-400">{title}</div>
      <div className="flex items-center text-sm leading-4 text-neutral-700 xl:text-base">
        {prefix ? <span className="mr-2 min-w-4">{prefix}</span> : null}
        {description}
        {suffix ? <span className="ml-2 min-w-4">{suffix}</span> : null}
      </div>
    </div>
  )
}

export default OverviewItem
