import { MantineColor, MantineSize, Switch } from "@mantine/core";
import { ReactNode, useState } from "react";
import "./toggle.css";

interface PropsToggle {
    defaultValue?: boolean;
    onLabel?: string;
    offLabel?: string;
    label: string;
    onToggleOn?: () => void;
    onToggleOff?: () => void;
    onToggle?: (state: boolean) => void;
    disabled? : boolean;
    onIcon?: ReactNode;
    offIcon?: ReactNode;
    onColor?: MantineColor;
    error?: string;
    onChange?: (value: boolean) => void;
    onBlur?(): () => void;
}

const Toggle = (props: PropsToggle) => {

    /**
     * State to controle weather or not the toggle is toggled
     */
    const [value, setValue] = useState<boolean>(props.defaultValue || false);

    /**
     * Method to print the label
     */
    const getLabel = (): string => {
        let label = props.label;
        if(props.onLabel && value)
            return props.onLabel;
        if(props.offLabel && !value)
            return props.offLabel;
        return label;
    }

    /**
     * Method called for when the state of the toggle changes
     */
    const onChange = () => {
        setValue(!value);
        props.onToggle ? props.onToggle(!value) : null;
        props.onToggleOn && !value ? props.onToggleOn() : null;
        props.onToggleOff && value ? props.onToggleOff() : null;
        props.onChange ? props.onChange(!value) : null;
    }

    return (
        <Switch
            error={props.error}
            className={["component-toggle", props.disabled ? "disabled" : ""].join(" ")}
            disabled={props.disabled}
            checked={value}
            onChange={onChange}
            onBlur={props.onBlur}
            label={getLabel()}
            color={props.onColor ?? "blue"}
            size="md"
            thumbIcon={
                value ? (
                  props.onIcon
                ) : (
                  props.offIcon
                )
              }
      />
    )

}

export default Toggle;