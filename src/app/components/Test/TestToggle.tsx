import { CheckIcon, StopCircleIcon } from "lucide-react";
import Toggle from "../Toggle/Toggle";

const TestToggle = () => {

    return (
        <div className="test-toggle">
            <Toggle defaultValue={false} label="Toggle" onLabel="toggled" offLabel="untoggled" />
            <Toggle defaultValue={true} label="Toggle"/>
            <Toggle defaultValue={true} onToggleOff={() => console.log("hello world")} label="With onUnCheck"/>
            <Toggle defaultValue={false} onToggleOn={() => console.log("hello world")} label="With onCheck"/>
            <Toggle defaultValue={false} onToggle={(value) => console.log("the toggle is : ", value)} label="With onChange"/>
            <Toggle size="lg" defaultValue={false} offIcon={<StopCircleIcon  color="red" />} onIcon={<CheckIcon color="green" />} onColor="green" label="With icon"/>
            <Toggle size="lg" defaultValue={true} disabled offIcon={<StopCircleIcon  color="red" />} onIcon={<CheckIcon color="green" />} onColor="green" label="With icon"/>
        </div>
    )

}

export default TestToggle;