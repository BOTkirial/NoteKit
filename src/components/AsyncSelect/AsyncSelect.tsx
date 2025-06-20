import AsyncMultiSelect from "./AsyncMultiSelect";
import "./asyncSelect.css";
import AsyncSingleSelect from "./AsyncSingleSelect";

interface BasePropsAsyncSelect {
  placeholder?: string;
  nothingFoundMessage?: string;
  route: string;
}

/**
 * Conditional type based on "type"
 * Allows an array of string in case of type === "multiSelect"
 * Allows a string in case of type === "singleSelect"
 */
type PropsAsyncSelect =
  ({
    type: "multiSelect";
    defaultValue: string[];
    onChange?: (value: string[]) => void;
  }
    | {
      type: "singleSelect";
      defaultValue?: string;
      onChange?: (value: string | null) => void;
    })
  & BasePropsAsyncSelect;

const AsyncSelect = (props: PropsAsyncSelect) => {

  return (
    <div className="async-select-wrapper">
      {/* {props.type === "multiSelect" && <AsyncMultiSelect forceModal={true} />} */}
      {props.type === "singleSelect" && <AsyncSingleSelect forceModal={true}  {...props} />}
    </div>
  )

}

export default AsyncSelect;