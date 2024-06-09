import ProfileForm from './ProfileForm'
import { useState, useEffect } from 'react'

const Profile = () => {
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditMode(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white px-4 pb-1 pt-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex flex-row items-center text-lg text-neutral-700">
            <img
              src={`src/assets/icons/userSquare.svg`}
              alt="User Icon"
              title="User Icon"
              className="me-2 size-6"
            />
            <div>Profile</div>
          </div>
        </div>
        <div>
          <button onClick={toggleEditMode} disabled={editMode}>
            <img
              src="src/assets/icons/edit.svg"
              alt="Edit"
              className={`pe-2 ${editMode ? 'opacity-50' : ''}`}
            />
          </button>
          <button>
            <img
              src="src/assets/icons/dotsHorisontal.svg"
              alt="User"
              className="ms-2 size-5 brightness-50 saturate-0"
            />
          </button>
        </div>
      </div>
      <ProfileForm editMode={editMode} toggleEditMode={toggleEditMode} />
    </div>
  )
}

export default Profile
