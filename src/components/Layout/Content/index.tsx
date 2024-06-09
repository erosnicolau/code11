import Profile from './Profile'
import Sidebar from './Sidebar'

function Content() {
  return (
    <div>
      <div className="mx-auto flex max-w-8xl flex-row items-start justify-between divide-x divide-neutral-300 p-12">
        <div className="grow pe-8">
          <Profile />
        </div>
        <div className="w-[300px] shrink-0 ps-8 xl:w-[360px] 2xl:w-[460px]">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Content
