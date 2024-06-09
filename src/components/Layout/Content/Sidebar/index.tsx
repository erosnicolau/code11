import ArticleShort from './ArticleShort'

const articles = [
  {
    icon: 'faceId',
    iconColor: 'red',
    title: 'SANCTION + SIP found',
    text: 'Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.',
    date: '11 Apr 2023 12:02PM',
    source: 'Source name',
    sourceLink: 'https://www.google.com',
    isNew: true
  },
  {
    icon: 'userCircle',
    title: 'SSN update',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    date: '11 Apr 2023 12:02PM',
    source: 'Source name',
    sourceLink: 'https://www.google.com',
    isNew: true
  },
  {
    icon: 'userCircle',
    title: 'New address',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    date: '11 Apr 2023 12:02PM',
    source: 'Source name',
    sourceLink: 'https://www.google.com',
    isNew: true
  },
  {
    icon: 'company',
    title: 'IKEA - new company',
    text: 'Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.',
    date: '11 Apr 2023 12:02PM',
    source: 'Source name',
    sourceLink: 'https://www.google.com',
    isNew: true
  },
  {
    icon: 'faceId',
    title: 'Screening monitor enabled',
    text: 'Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.',
    date: '11 Apr 2023 12:02PM',
    source: 'Source name',
    sourceLink: 'https://www.google.com'
  }
]

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 divide-y divide-neutral-300">
      {articles.map((article) => (
        <ArticleShort key={article.title} {...article} />
      ))}
    </div>
  )
}

export default Sidebar
