"use client";

import { Button as MantineButton, MantineColor } from "@mantine/core";
import "./button.css";
import { MouseEventHandler, ReactNode } from "react";

export interface PropsButton {
    text?: string;
    color?: MantineColor;
    icon?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    variant?: "filled" | "light" | "outline" | "subtle";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
}

const Button = (props: PropsButton) => {

    return (

        <MantineButton
            className={["component-button", (props.text === "" || props.text === undefined) ? "round-button" : ""].join(" ")}
            loading={props.loading}
            disabled={props.disabled}
            variant={props.variant ?? "filled"}
            onClick={props.onClick}
            color={props.color}
            type={props.type ?? "button"}
        >
            <div className="component-button-content">
                {props.text}
                <span className="component-button-content-icon">{props.icon}</span>
            </div>
        </MantineButton>

    )

}

export default Button;