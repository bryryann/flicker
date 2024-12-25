import useField from "../../../hooks/useField";
import { performLogin } from "../../../redux/actions/loginActions";
import Button from "../../Button";
import Input from "../../Input";
import { AuthCredentials } from "../../../services/auth-service";
import { useAppDispatch } from "../../../redux/store";
import "./style.css";

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const username = useField("text");
    const password = useField("password");

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const authAsync = async (cred: AuthCredentials) => {
            // extend onSubmit functionality here
            dispatch(performLogin(cred));
        }
        authAsync({
            username: username.value,
            password: password.value
        });
        username.onReset();
        password.onReset();
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                variant="outlined"
                type={username.type}
                placeholder="Username"
                label="Username"
                name="username"
                value={username.value}
                setValue={username.onChange}
            />

            <Input
                variant="outlined"
                type={password.type}
                placeholder="Password"
                label="Password"
                name="password"
                value={password.value}
                setValue={password.onChange}
            />

            <Button variant="default" >Log In</Button>
        </form>
    );
};

export default LoginForm;
