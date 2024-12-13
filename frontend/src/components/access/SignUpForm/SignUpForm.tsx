import React from "react";
import useField from "../../../hooks/useField";
import Button from "../../Button";
import Input from "../../Input";
import "./style.css";

const SignUpForm: React.FC = () => {
    const username = useField("text");
    const password = useField("password");

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        /*
         * Not implemented yet.
         * */
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

            <Button variant="default">Create Account</Button>
        </form>
    );
};

export default SignUpForm;
