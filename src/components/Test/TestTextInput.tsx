import TextInput from "@component/TextInput/TextInput";

const TestTextInput = () => {

    return (
        <div className="test-text-input">
            <TextInput
                onChange={(value) => console.log(value)}
                defaultValue="Bonjour" 
                clearButton={true}
            />
            <TextInput
                onChange={(value) => console.log(value)}
                placeHolder="Bonjour"
            />
        </div>
    )

}

export default TestTextInput;