import { TextInput as MantineTextInput } from "@mantine/core"
import { XIcon } from "lucide-react";
import { ReactNode, useState } from "react";

interface PropsTextInput {
    multiline?: boolean;
    resizeable?: boolean;
    clearButton?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onChangeTimeOut?: number;
    defaultValue?: string;
    placeHolder?: string;
}

const TextInput = (props: PropsTextInput) => {

    const [tabTimeOut, setTabTimeOut] = useState<number[]>([]);
    const [value, setValue] = useState<string>(props.defaultValue ?? "")
    const timeout = props.onChangeTimeOut ?? 300;


    const localOnChange = (value: string) => {

        setValue(value);

        tabTimeOut.forEach(timeoutId => window.clearTimeout(timeoutId));

        const timeoutId = window.setTimeout(() => {
            props.onChange ? props.onChange(value)  : null;
        }, timeout)

        setTabTimeOut([...tabTimeOut, timeoutId]);

    }

    return (
        <MantineTextInput 
            onChange={(e) => localOnChange(e.currentTarget.value)}
            placeholder={props.placeHolder}
            value={value}
            rightSection={
                props.clearButton ? <XIcon onClick={() => {
                    localOnChange("");
                }} /> : null
            }
        />
    )

}

export default TextInput;