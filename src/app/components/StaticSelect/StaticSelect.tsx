import { Select } from "@mantine/core";

interface PropsStaticSelect {
  defaultValue?: string;
  data:{value: string, label: string}[];
}

const StaticSelect = (props: PropsStaticSelect) => {

    return (
        <Select
          className="static-select"
          checkIconPosition="right"
          defaultValue={props.defaultValue}
          data={props.data}
          searchable
          clearable
          nothingFoundMessage="Nothing found..."
        />

    )

}

export default StaticSelect;