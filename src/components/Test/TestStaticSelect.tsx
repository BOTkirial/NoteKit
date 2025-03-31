import List from "../List/List";
import StaticSelect from "../StaticSelect/StaticSelect";

const TestStaticSelect = () => {

    return (
        <div className="test-static-select">
            <List direction="vertical">
                <StaticSelect
                    type="multiSelect"
                    placeholder="Select a value"
                    onChange={(value) => console.log(value)}
                    defaultValue={[]}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    type="multiSelect"
                    onChange={(value) => console.log(value)}
                    defaultValue={["2017"]}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    type="singleSelect"
                    onChange={(value) => console.log(value)}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    type="singleSelect"
                    onChange={(value) => console.log(value)}
                    defaultValue={"2017"}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    forceModal={true}
                    type="multiSelect"
                    placeholder="Select a value"
                    onChange={(value) => console.log(value)}
                    defaultValue={[]}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    forceModal={true}
                    type="multiSelect"
                    onChange={(value) => console.log(value)}
                    defaultValue={["2017"]}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    forceModal={true}
                    type="singleSelect"
                    onChange={(value) => console.log(value)}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
                <StaticSelect
                    forceModal={true}
                    type="singleSelect"
                    onChange={(value) => console.log(value)}
                    defaultValue={"2017"}
                    data={[
                        { label: "2021", value: "2021" },
                        { label: "2020", value: "2020" },
                        { label: "2019", value: "2019" },
                        { label: "2018", value: "2018" },
                        { label: "2017", value: "2017" },
                        { label: "2016", value: "2016" },
                        { label: "2015", value: "2015" },
                        { label: "2014", value: "2014" }
                    ]}
                />
            </List>
        </div>
    )

}

export default TestStaticSelect;