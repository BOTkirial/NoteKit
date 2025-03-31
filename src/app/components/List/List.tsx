"use client";

import { CSSProperties, Flex } from "@mantine/core";
import { ReactNode } from "react";
import "./list.css";

interface PropsList {
    direction?: "vertical" | "horizontal";
    behavior?: "wrap" | "scroll";
    xGap?: number;
    yGap?: number;
    style?: CSSProperties;
    children: ReactNode;
    className?: string;
}

const List = (props: PropsList) => {

    const direction: "vertical" | "horizontal" = props.direction ? props.direction : "horizontal";
    const behavior: "wrap" | "scroll" = props.behavior ? props.behavior : "wrap";
    const xGap: number = props.xGap ? props.xGap : 10;
    const yGap: number = props.yGap ? props.yGap : 10;

    return (
        <Flex
            className={["component-list", props.className ? props.className : ""].join(" ")}
            direction={direction === "vertical" ? "column" : "row"}
            wrap={behavior === "wrap" ? "wrap" : "nowrap"}
            style={{
                overflow: behavior === "wrap" ? "auto" : "scroll",
                paddingBottom: behavior === "scroll" ? 10 : "auto",
                whiteSpace: "nowrap",
                ...props.style
            }}
            gap={yGap + " " + xGap}
        >
            {props.children}
        </Flex>
    )

}

export default List;