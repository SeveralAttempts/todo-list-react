import './InputField.css'
import type { FieldProps } from './FieldProps'

function InputField({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  disabled = false
}: FieldProps) {
  return (
    <div className="field-row">
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="field-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default InputField