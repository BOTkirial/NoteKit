"use client";

import TestButton from "./TestButton";
import TestList from "./TestList";
import TestNumberInput from "./TestNumberInput";
import TestRating from "./TestRating";
import TestStaticSelect from "./TestStaticSelect";
import TestTextInput from "./TestTextInput";
import TestToggle from "./TestToggle";





const Test = () => {

    return (

        <div className="test-components">

            <TestNumberInput />
            <TestRating />
            <TestTextInput />
            <TestButton />
            <TestList />
            <TestToggle />
            <TestStaticSelect />


        </div>
    )

}

export default Test;