import { Checkbox, CheckboxGroup, Divider, MultiSelect, RadioGroup } from "@mantine/core";
import { useRef, useState } from "react";
import List from "../List/List";
import Button from "../Button/Button";

interface PropsStaticMultiSelect {
    data: { value: string, label: string }[];
    placeholder?: string;
    nothingFoundMessage?: string;
    defaultValue: string[];
    onChange?: (value: string[]) => void;
    forceModal?: boolean;
}

const StaticMultiSelect = (props: PropsStaticMultiSelect) => {

    const [value, setValue] = useState<string[] | undefined>(props.defaultValue);
    const mobileSelectRef = useRef<HTMLDivElement>(null);
    const withModal = props.forceModal;
    const [tempValue, setTempValue] = useState<string[]>(props.defaultValue);

    const handleMobileSelect = (value: string) => {
        const isAlreadySelected = tempValue.includes(value);
        if(isAlreadySelected) {
            setTempValue(() => tempValue.filter(el => el !== value));
        } else {
            setTempValue(() => [...tempValue, value]);
        }
    }

    return (
        <>
            <MultiSelect
                className="static-multi-select"
                checkIconPosition="right"
                dropdownOpened={withModal ? false : undefined}
                defaultValue={props.defaultValue}
                onClick={() => { if (withModal) { mobileSelectRef.current?.classList.add("open") } }}
                data={props.data}
                value={value as string[]}
                onChange={(value) => { props.onChange ? props.onChange(value) : null; setValue(value) }}
                searchable
                clearable
                placeholder={props.placeholder || "Pick a value"}
                nothingFoundMessage={props.nothingFoundMessage || "Nothing found"}
                onClear={() => setTempValue([])}
            />
             <div ref={mobileSelectRef} className="mobile-multiple-select-background">
                <div className="mobile-multiple-select">
                    <CheckboxGroup className="mobile-multiple-select-list" value={tempValue as string[]}>
                        <List behavior="scroll" direction="vertical">
                            {props.data.map(el => (
                                <Checkbox onChange={() => handleMobileSelect(el.value)}

                                key={el.value} value={el.value} label={el.label} labelPosition="left" />
                            ))}
                        </List>
                    </CheckboxGroup>
                    <List style={{justifyContent: "flex-end"}} className="multiple-select-buttons" behavior="wrap" direction="horizontal">
                        <Button variant="outline" text="Cancel" onClick={() => mobileSelectRef.current?.classList.remove("open")} />
                        <Button text="OK"  onClick={() => { setValue(tempValue); mobileSelectRef.current?.classList.remove("open") }} />
                    </List>
                </div>
            </div>
        </>
    )

}

export default StaticMultiSelect;