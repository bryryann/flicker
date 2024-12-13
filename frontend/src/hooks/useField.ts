import { useState } from "react";

type InputTypes = "text" | "password" | "email";

export default function useField(type: InputTypes) {
    const [value, setValue] = useState<string>("");

    const onChange = (event: React.SyntheticEvent) => {
        setValue((event.target as HTMLInputElement).value);
    }
    const onReset = () => { setValue(""); };

    return {
        type,
        value,
        onChange,
        onReset
    };
}
