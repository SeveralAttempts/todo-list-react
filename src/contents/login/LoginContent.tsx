import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

function LoginContent() {
    const navigate = useNavigate();

    return (
        <>
            <InputField label='username' name='username' />
            <InputField label='password' name='password' />
            <Button children={"Enter"} onClick={() => OnEnterButtonClick(navigate)} />
        </>
    )
}

function OnEnterButtonClick(navigate: NavigateFunction): void {
    // TODO: backend api check for user's name and pass
    navigate("/todo-list");
}

export default LoginContent
