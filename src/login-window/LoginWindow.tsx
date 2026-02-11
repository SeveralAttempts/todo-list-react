import './LoginWindow.css'
import Button from './../button/Button';
import InputField from './../input/InputField';

function LoginWindow() {
    return (
        <>
            <div className='login-window-container'>
                <div className='login-window-upper-panel'>
                    <span>Login</span>
                    <div className="login-window-controls">
                        <Button padding='2px 5px'>_</Button>
                        <Button padding='2px 5px'>□</Button>
                        <Button padding='2px 5px'>x</Button>
                    </div>
                </div>
                <div className='login-window-body'>
                    <InputField label='username' name='username' />
                    <InputField label='password' name='password' />
                    <Button children={"Enter"} onClick={OnEnterButtonClick} />
                </div>
            </div>
        </>
    )
}

function OnEnterButtonClick(): void {
    
}

export default LoginWindow
