export interface FieldProps {
    label: string
    type?: 'text' | 'password'
    name: string
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
  }