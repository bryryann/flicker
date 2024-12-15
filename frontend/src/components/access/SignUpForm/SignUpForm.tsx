import React from "react";
import useField from "../../../hooks/useField";
import Button from "../../Button";
import Input from "../../Input";
import "./style.css";

const SignUpForm: React.FC = () => {
    const username = useField("text");
    const email = useField("email");
    const password = useField("password");
    const confirmPwd = useField("password");

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        /*
         * Not implemented yet.
         * */
        username.onReset();
        email.onReset()
        password.onReset();
        confirmPwd.onReset();
    }

    return (
        <form onSubmit={onSubmit}>

            <Input
                type={username.type}
                placeholder="Username"
                label="Username"
                name="username"
                value={username.value}
                setValue={username.onChange}
            />

            <Input
                type={email.type}
                placeholder="Email"
                label="Email"
                name="email"
                value={email.value}
                setValue={email.onChange}
            />

            <Input
                type={password.type}
                placeholder="Password"
                label="Password"
                name="password"
                value={password.value}
                setValue={password.onChange}
            />

            <Input
                type={confirmPwd.type}
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirm-password"
                value={confirmPwd.value}
                setValue={confirmPwd.onChange}
            />

            <Button variant="default">Create Account</Button>
        </form>
    );
};

export default SignUpForm;
