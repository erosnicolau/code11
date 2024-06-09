import Overview from './Overview'
import Title from './Title'

const Header = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-8xl flex-col gap-12  px-12 py-8">
        <Title />
        <Overview />
      </div>
    </div>
  )
}

export default Header
