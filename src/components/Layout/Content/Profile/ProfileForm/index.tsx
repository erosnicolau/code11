import { useState } from 'react'
import FormField from './FormField'
import 'react-datepicker/dist/react-datepicker.css'

type FormFieldType = {
  name: string
  title: string
  type: string
  label: string
  bullet?: boolean
}

const initialFormData = {
  firstName: 'Alia',
  lastName: 'Bhatt',
  dob: new Date('1975-01-01'),
  ssn: '19221332212212',
  email1: 'aliabhatt@microsoft.com',
  email2: 'aliabhatt@ikea.com',
  phone: '+22 299 229 222',
  nationality: 'Norwegian',
  nationality2: 'German'
}

const formFields: FormFieldType[][] = [
  [
    {
      name: 'firstName',
      title: 'First name',
      type: 'text',
      label: 'Self-declaration'
    },
    {
      name: 'lastName',
      title: 'Last name',
      type: 'text',
      label: 'Self-declaration'
    },
    {
      name: 'dob',
      title: 'Date of birth',
      type: 'datePicker',
      label: 'Manual'
    },
    {
      name: 'ssn',
      title: 'SSN',
      type: 'text',
      label: 'Manual input',
      bullet: true
    }
  ],
  [
    {
      name: 'email1',
      title: 'Email 1',
      type: 'text',
      label: 'Self-declaration'
    },
    {
      name: 'email2',
      title: 'Email 2',
      type: 'text',
      label: 'Self-declaration'
    }
  ],
  [
    {
      name: 'phone',
      title: 'Phone',
      type: 'text',
      label: 'Self-declaration'
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'text',
      label: 'Self-declaration'
    },
    {
      name: 'nationality2',
      title: 'Nationality 2',
      type: 'text',
      label: 'Self-declaration'
    }
  ]
]

type ProfileFormProps = {
  editMode: boolean
  toggleEditMode: () => void
}

const ProfileForm = ({ editMode, toggleEditMode }: ProfileFormProps) => {
  const [formData, setFormData] = useState(initialFormData)
  const [initialData, setInitialData] = useState(initialFormData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | Date | null,
    fieldName: string
  ) => {
    if (e instanceof Date) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: e.toISOString()
      }))
    } else if (e) {
      const value = (e as React.ChangeEvent<HTMLInputElement>).target.value
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value
      }))
    }
  }

  const handleCancel = () => {
    setFormData(initialData)
    toggleEditMode()
  }

  const handleSave = () => {
    setInitialData(formData)
    toggleEditMode()
  }

  return (
    <div>
      {formFields.map((rowFields, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-3">
          {rowFields.map((field, index) => (
            <div key={index} className="mb-3 flex-1 rounded bg-zinc-100 p-3">
              <FormField
                field={field}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                rowIndex={rowIndex}
                index={index}
                editable={editMode}
                bullet={field.bullet}
              />
            </div>
          ))}
        </div>
      ))}
      {editMode ? (
        <div className="mb-3 mt-1 flex justify-end">
          <button
            onClick={handleCancel}
            className="rounded bg-gray-500 px-4 py-2 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="ml-2 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Save
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ProfileForm
