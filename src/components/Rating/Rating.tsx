import { Rating as MantineRating } from "@mantine/core";
import { useState } from "react";
import "./rating.css";


interface PropsRating {
    disabled?: boolean;
    defaultValue?: number;
    onChange?: (value: number) => void;
    symbol?: "♥️" | "⭐" | "🙂" | "🔥";
    maxValue?: number;
}

const Rating = (props: PropsRating) => {

    const symbol = props.symbol ?? "♥️";
    const maxValue = props.maxValue ?? 5;
    const [value, setValue] = useState<number>(props.defaultValue || 0);

    const localOnChange = (value: number) => {
        setValue(value);
        props.onChange ? props.onChange(value)  : null;
    }   

    return (
        <MantineRating
            className="component-rating"
            value={value}
            emptySymbol={<span className="component-rating-symbol empty">{symbol}</span>} 
            fullSymbol={<span className="component-rating-symbol filled">{symbol}</span>}
            onChange={localOnChange} 
            fractions={1}
            count={maxValue}
            readOnly={props.disabled}
        />
    )

}

export default Rating;