export interface ButtonProps {
    width?: string | number
    height?: string | number
    fontSize?: string
    padding?: string
    children?: React.ReactNode | string
    onClick?: () => void
}