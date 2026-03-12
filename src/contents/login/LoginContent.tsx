import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';

function LoginContent() {
    return (
        <>
            <InputField label='username' name='username' />
            <InputField label='password' name='password' />
            <Button children={"Enter"} onClick={OnEnterButtonClick} />
        </>
    )
}

function OnEnterButtonClick(): void {
    
}

export default LoginContent
