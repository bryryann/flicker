import React from "react";
import useField from "../../../hooks/useField";
import Button from "../../Button";
import Input from "../../Input";
import { AuthCredentials, authenticateUser } from "../../../services/auth-service";
import "./style.css";

const LoginForm: React.FC = () => {
    const username = useField("text");
    const password = useField("password");

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const authAsync = async (cred: AuthCredentials) => {
            const res = await authenticateUser(cred);
            console.log(res);
            // extend functionality here
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
