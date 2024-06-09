import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'

function Content() {
  return (
    <div className="bg-zinc-100">
      <div className="mx-auto flex max-w-8xl flex-row items-start justify-between divide-x px-12 py-8">
        <div className="grow pe-8">
          <Profile />
        </div>
        <div className="w-[460px] ps-8">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Content
