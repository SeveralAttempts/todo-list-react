import './DefaultWindow.css'
import Button from './../../components/button/Button';
import type { DefaultWindowProps } from './DefaultWindowProps'

function DefaultWindow({content}: DefaultWindowProps) {
    return (
        <>
            <div className='default-window-container'>
                <div className='default-window-upper-panel'>
                    <span>Login window</span>
                    <div className="default-window-controls">
                        <Button padding='2px 5px'>_</Button>
                        <Button padding='2px 5px'>□</Button>
                        <Button padding='2px 5px'>x</Button>
                    </div>
                </div>
                <div className='default-window-body'>
                    {content}
                </div>
            </div>
        </>
    )
}

export default DefaultWindow
