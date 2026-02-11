import './Button.css'
import type { ButtonProps } from './ButtonProps.ts'

function Button({ width = 'auto', height = 'auto', fontSize = '12px', padding = '8px 8px', children, onClick } : ButtonProps) {
    return (
        <>
            <button style={{ width, height, fontSize, padding }}
                onClick={onClick}>
                { children }
            </button>
        </>
    )
}

export default Button