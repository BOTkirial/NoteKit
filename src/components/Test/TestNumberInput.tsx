import NumberInput from "@component/NumberInput/NumberInput";

const TestNumberInput = () => {

    return (
        <div className="test-number-input">
            <NumberInput defaultValue={10} />
            <NumberInput defaultValue={10} minValue={11} />
            <NumberInput defaultValue={5} disabled />
            <NumberInput defaultValue={999} onChange={(value) => console.log(value)}/>
            <NumberInput defaultValue={999} maxValue={1000} minValue={100} onChange={(value) => console.log(value)}/>
        </div>
    )

}

export default TestNumberInput;