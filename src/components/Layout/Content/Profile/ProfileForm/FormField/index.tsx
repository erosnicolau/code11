import React from 'react'
import DatePicker from 'react-datepicker'

type FormFieldType = {
  name: string
  title: string
  type: string
  label: string
  bullet?: boolean
}

type FormFieldProps = {
  field: FormFieldType
  value: string | Date | null | undefined
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | Date | null,
    fieldName: string
  ) => void
  rowIndex: number
  index: number
  editable: boolean
  bullet?: boolean
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  value,
  onChange,
  rowIndex,
  index,
  editable,
  bullet = false
}) => {
  const renderField = () => {
    if (!editable) {
      return (
        <div className="flex h-6 items-end text-neutral-700">
          <div className="line-clamp-1 overflow-hidden leading-4">
            {value instanceof Date ? value.toLocaleDateString() : value}
          </div>
        </div>
      )
    }

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={(value as string) || ''}
            onChange={(e) => onChange(e, field.name)}
            className="my-1 mr-4 h-8 w-full rounded border border-gray-300 p-2"
            disabled={!editable}
            id={field.name + '-' + rowIndex + '-' + index}
          />
        )
      case 'datePicker':
        return (
          <DatePicker
            selected={value as Date | null | undefined}
            onChange={(date: Date | null) => onChange(date, field.name)}
            disabled={!editable}
            className="my-1 mr-4 h-8 w-full rounded border border-gray-300 p-2"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center text-[13px]/[13px] text-neutral-400">
        {bullet ? (
          <img
            src={`src/assets/icons/blueDot.svg`}
            alt="new"
            title="new"
            className="me-2 size-2"
          />
        ) : null}
        {field.title}
      </div>
      {renderField()}
      <div className="text-[13px]/[13px] text-neutral-400">{field.label}</div>
    </div>
  )
}

export default FormField
