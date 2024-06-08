import UserActions from './UserActions'
import UserTitle from './UserTitle'

const Title = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <UserTitle
        userName="Alia Bhatt"
        avatarUrl="src/assets/icons/userAvatar.svg"
        updates={4}
      />
      <UserActions />
    </div>
  )
}

export default Title
