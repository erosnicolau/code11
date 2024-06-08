import OverviewItem from './OverviewItem'

const overviewData = [
  {
    title: 'Date of birth',
    description: '1975-01-01'
  },
  {
    title: 'SSN',
    description: '19221332212212'
  },
  {
    title: 'Companies',
    description: 4,
    suffix: <img src="src/assets/icons/company.svg" alt="company" />
  },
  {
    title: 'ID Control',
    description: 'Partial match on name and date of birth'
  },
  {
    title: 'Screening',
    description: 'Sanction + SIP found',
    prefix: <img src="src/assets/icons/redDot.svg" alt="red dot" />
  },
  {
    title: 'Screening monitor',
    description: 'Active'
  }
]

const Overview = () => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border border-neutral-200 px-1 py-6 ">
      <div className="flex flex-row divide-x">
        {overviewData
          ? overviewData.map((item) => (
            <OverviewItem key={item.title} {...item} />
          ))
          : null}
      </div>
      <a href="#" className="me-4 block min-w-6 hover:invert">
        <img src="src/assets/icons/settings.svg" alt="settings" />
      </a>
    </div>
  )
}

export default Overview
