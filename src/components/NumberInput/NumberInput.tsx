import { NumberInput as MantineNumberInput } from "@mantine/core"
import { useState } from "react";

interface PropsNumberInput {
    disabled?: boolean;
    onChange?: (value: number) => void;
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
}

const NumberInput = (props: PropsNumberInput) => {

    let defaultValue = props.defaultValue ?? 0;

    if(defaultValue !== undefined && props.minValue !== undefined && defaultValue < props.minValue) {
        defaultValue = props.minValue;
    }
    
    const [value, setValue] = useState<number>(defaultValue)

    const localOnChange = (value: number) => {
        setValue(value);
        props.onChange ? props.onChange(value)  : null;
    }

    return (
        <MantineNumberInput
            min={props.minValue}
            max={props.maxValue}
            onChange={(value) => localOnChange(value as number)}
            value={value}
            hideControls
            disabled={props.disabled}
        />
    )

}

export default NumberInput;