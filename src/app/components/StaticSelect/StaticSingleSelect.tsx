import { Divider, Radio, RadioGroup, Select } from "@mantine/core";
import { useRef, useState } from "react";
import List from "../List/List";
import Button from "../Button/Button";

interface PropsStaticSingleSelect {
    defaultValue?: string;
    onChange?: (value: string | null) => void;
    data: { value: string, label: string }[];
    placeholder?: string;
    nothingFoundMessage?: string;
    forceModal?: boolean;
}

const StaticSingleSelect = (props: PropsStaticSingleSelect) => {

    const [value, setValue] = useState<string | undefined | null>(props.defaultValue);
    const mobileSelectRef = useRef<HTMLDivElement>(null);
    const withModal = props.forceModal;
    const [tempValue, setTempValue] = useState<string | undefined | null>(props.defaultValue);

    return (
        <>
            <Select
                className="static-single-select"
                checkIconPosition="right"
                dropdownOpened={withModal ? false : undefined}
                defaultValue={props.defaultValue}
                onClick={() => { if (withModal) { mobileSelectRef.current?.classList.add("open"); } }}
                onChange={(value) => { props.onChange ? props.onChange(value) : null; setValue(value) }}
                data={props.data}
                value={value as string}
                searchable
                clearable
                placeholder={props.placeholder || "Pick a value"}
                nothingFoundMessage={props.nothingFoundMessage || "Nothing found"}
                onClear={() => setTempValue(null)}
            />
            <div ref={mobileSelectRef} className="mobile-single-select-background">
                <div className="mobile-single-select">
                    <RadioGroup className="mobile-single-select-list" value={tempValue as string}>
                        <List behavior="scroll" direction="vertical">
                            {props.data.map(el => (
                                <Radio onChange={() => setTempValue(el.value)} key={el.value} value={el.value} label={el.label} labelPosition="left" />
                            ))}
                        </List>
                    </RadioGroup>
                    <List style={{justifyContent: "flex-end"}} className="single-select-buttons" behavior="wrap" direction="horizontal">
                        <Button variant="outline" text="Cancel" onClick={() => mobileSelectRef.current?.classList.remove("open")} />
                        <Button text="OK"  onClick={() => { setValue(tempValue); mobileSelectRef.current?.classList.remove("open") }} />
                    </List>
                </div>
            </div>
        </>
    )

}

export default StaticSingleSelect;