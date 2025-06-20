import Button from "@component/Button/Button";
import List from "@component/List/List";
import { Radio, RadioGroup, Select } from "@mantine/core";
import API from "@services/client/API";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState, WheelEvent, WheelEventHandler } from "react";
import { createPortal } from "react-dom";

interface PropsAsyncSingleSelect {
    defaultValue?: string;
    onChange?: (value: string | null) => void;
    route: string;
    params?: { [key: string]: string | number; };
    placeholder?: string;
    nothingFoundMessage?: string;
    forceModal?: boolean;
}


const AsyncSingleSelect = (props: PropsAsyncSingleSelect) => {

    const [value, setValue] = useState<string | undefined | null>(props.defaultValue);
    const mobileSelectRef = useRef<HTMLDivElement>(null);
    const withModal = props.forceModal;
    const [tempValue, setTempValue] = useState<string | undefined | null>(props.defaultValue);

    const PAGE_SIZE = 12;

    const getFlatData = (data:any) => data?.pages.flatMap((page: any) => page).map(el => ({value: String(el.id), label: el.name})) || [];
    
    const queryResult = useInfiniteQuery({
        queryKey: ["test"],
        initialPageParam: 1,
        queryFn: ({pageParam}) => API.Get(props.route, {sortBy: "id", sort: "DESC", size: PAGE_SIZE, page: pageParam}),
        getNextPageParam: (_pageData, _allData, page) => { return _pageData.length > 0 ? page + 1 : undefined},
        getPreviousPageParam: (_a, _b, page) => page > 0 ? page - 1 : undefined,
    })

    const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
        const target = e.currentTarget;

        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;

        const topReached = scrollTop === 0;
        const bottomReached = scrollTop + clientHeight >= scrollHeight;

        if (topReached) {
            console.log("✅ Arrivé en haut");
            
        } else if (bottomReached) {
            console.log("✅ Arrivé en bas");
            queryResult.fetchNextPage()
        } else {
            console.log("🌀 En train de scroller...");
        }
    }

    const flatData = getFlatData(queryResult.data);

    return (
        <>
            <Select
                className="static-single-select"
                checkIconPosition="right"
                dropdownOpened={withModal ? false : undefined}
                defaultValue={props.defaultValue}
                onFocus={() => { if (withModal) { mobileSelectRef.current?.classList.add("open"); } }}
                onChange={(value) => { props.onChange ? props.onChange(value) : null; setValue(value) }}
                data={flatData}
                value={value as string}
                searchable
                clearable
                placeholder={props.placeholder || "Pick a value"}
                nothingFoundMessage={props.nothingFoundMessage || "Nothing found"}
                onClear={() => setTempValue(null)}
            />
            {createPortal(<div ref={mobileSelectRef} className="mobile-single-select-background">
                <div className="mobile-single-select">
                    <RadioGroup onWheel={handleScroll} className="mobile-single-select-list" value={tempValue as string}>
                        <List behavior="scroll" direction="vertical">
                            {flatData.map(el => (
                                <Radio onChange={() => setTempValue(el.value)} key={el.value} value={el.value} label={el.label} labelPosition="left" />
                            ))}
                        </List>
                    </RadioGroup>
                    <List style={{ justifyContent: "flex-end" }} className="single-select-buttons" behavior="wrap" direction="horizontal">
                        <Button variant="outline" text="Cancel" onClick={() => mobileSelectRef.current?.classList.remove("open")} />
                        <Button text="OK" onClick={() => { setValue(tempValue); mobileSelectRef.current?.classList.remove("open") }} />
                    </List>
                </div>
            </div>, document.body)}
        </>
    )


}

export default AsyncSingleSelect;
