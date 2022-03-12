import React from 'react'
import './form-input.styles.scss'

interface IProps {
  onChange: (event: any) => void
  label?: string
  name: string
  type: string
  value: string
  required?: boolean
}

const FormInput: React.FC<IProps> = ({
  onChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={onChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length
          ? 'shrink'
          : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
