import { FC } from 'react'

type UserTitleProps = {
  userName: string
  avatarUrl: string
  updates: number
}

const UserTitle: FC<UserTitleProps> = ({ userName, avatarUrl, updates }) => {
  return (
    <div className="flex flex-row items-center divide-x">
      <a href="#" className="pe-4">
        <img
          src="src/assets/icons/filledIconArrowRight.svg"
          alt="Go Back"
          title="Go Back"
          className="hover:brightness-200"
        />
      </a>
      <div className="flex flex-row items-center ps-4">
        <img src={avatarUrl} alt={userName} title={userName} className="me-2" />
        <h6 className="text-h6 text-neutral-600">{userName}</h6>
        {updates > 0 ? (
          <div className="ms-4 flex h-8 items-center rounded-full bg-sky-100 px-3 py-2 text-neutral-700">
            <img
              src="src/assets/icons/blueDot.svg"
              alt="Updates"
              className="size-4 pe-2"
            />
            {updates} Updates
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default UserTitle
