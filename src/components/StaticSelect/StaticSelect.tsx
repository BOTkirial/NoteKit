
import "./staticSelect.css";
import StaticMultiSelect from "./StaticMultiSelect";
import StaticSingleSelect from "./StaticSingleSelect";

interface BasePropsStaticSelect {
  data: { value: string, label: string }[];
  placeholder?: string;
  nothingFoundMessage?: string;
  forceModal?: boolean;
}

/**
 * Conditional type based on "type"
 * Allows an array of string in case of type === "multiSelect"
 * Allows a string in case of type === "singleSelect"
 */
type PropsStaticSelect = 
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
  & BasePropsStaticSelect;


const StaticSelect = (props: PropsStaticSelect) => {

  return (
    <div className="static-select-wrapper">
      { props.type === "multiSelect" && <StaticMultiSelect {...props} /> }
      { props.type === "singleSelect" && <StaticSingleSelect {...props} /> }
    </div>
  )


}

export default StaticSelect;