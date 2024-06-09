import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type FormFieldType = {
  name: string
  title: string
  type: string
  label: string
}

const Profile = () => {
  const [editable, setEditable] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Alya',
    lastName: 'Bhatt',
    dob: new Date('1975-01-01'),
    ssn: '19221332212212',
    email1: 'aliabhatt@microsoft.com',
    email2: 'aliabhatt@ikea.com',
    phone: '+22 299 229 222',
    nationality: 'Norwegian',
    nationality2: 'German'
  })

  const formFields = [
    [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'text',
        label: 'self declaration'
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'text',
        label: 'self declaration'
      },
      {
        name: 'dob',
        title: 'Date of birth',
        type: 'datePicker',
        label: 'manual'
      },
      { name: 'ssn', title: 'SSN', type: 'text', label: 'manual input' }
    ],
    [
      {
        name: 'email1',
        title: 'Email 1',
        type: 'text',
        label: 'self declaration'
      },
      {
        name: 'email2',
        title: 'Email 2',
        type: 'text',
        label: 'self declaration'
      }
    ],
    [
      {
        name: 'phone',
        title: 'Phone',
        type: 'text',
        label: 'self declaration'
      },
      {
        name: 'nationality',
        title: 'Nationality',
        type: 'text',
        label: 'self declaration'
      },
      {
        name: 'nationality2',
        title: 'Nationality 2',
        type: 'text',
        label: 'self declaration'
      }
    ]
  ]

  const toggleEdit = () => {
    setEditable(!editable)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | Date | null,
    fieldName: string
  ) => {
    console.log('fieldName', fieldName)
    if (e instanceof Date) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: e.toISOString() // Convert Date to string
      }))
    } else if (e) {
      const value = (e as React.ChangeEvent<HTMLInputElement>).target.value
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value
      }))
    }
    console.log(formData) // Log the updated state
  }

  const renderField = (
    field: FormFieldType,
    rowIndex: number,
    index: number
  ) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={
              (formData[field.name as keyof typeof formData] as string) || ''
            }
            onChange={(e) => handleChange(e, field.name)}
            className="mb-4 mr-4 w-full border border-gray-300 p-2"
            disabled={!editable}
            id={field.name + '-' + rowIndex + '-' + index}
          />
        )
      case 'datePicker':
        return (
          <DatePicker
            selected={
              formData[field.name.toLowerCase() as keyof typeof formData] as
              | Date
              | null
              | undefined
            }
            onChange={(date: Date | null) => handleChange(date, field.name)}
            disabled={!editable}
            className="mb-4 mr-4 w-full"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="rounded-lg bg-white p-4">
      {formFields.map((rowFields, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap">
          {rowFields.map((field, index) => {
            return (
              <div key={index} className="mb-4 flex-1">
                <div className="font-semibold">{field.title}</div>
                {renderField(field, rowIndex, index)}
                <div> {field.label}</div>
              </div>
            )
          })}
        </div>
      ))}
      <div className="mt-4 flex justify-end">
        <button
          onClick={toggleEdit}
          className={`rounded px-4 py-2 text-white
            ${editable ? 'bg-gray-500' : 'bg-blue-500'}`}
        >
          {editable ? 'Cancel' : 'Edit'}
        </button>
        {editable && (
          <button
            onClick={toggleEdit}
            className="ml-2 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default Profile
