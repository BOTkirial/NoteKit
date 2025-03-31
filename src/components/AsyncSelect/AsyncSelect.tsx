import { Loader, Select } from "@mantine/core";


const AsyncSelect = () => {

    return (
        <Select
        className="async-select"
        checkIconPosition="right"
        clearable={true}
        defaultValue="ng"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
          ]}
          searchable
          nothingFoundMessage="Nothing found..."
          rightSection={<><Loader /></>}
        />

    )

}

export default AsyncSelect;