import { SaveIcon } from "lucide-react"
import Button from "../Button/Button"
import { MantineColor } from "@mantine/core";
import List from "../List/List";

const TestButton = () => {

    const callback = () => console.log("hello world");
    const tabDisabledOptions: boolean[] = [true, false];
    const tabLoadingOptions: boolean[] = [true, false];
    const tabVariantOptions: ("filled" | "outline" | "light" | "subtle")[] = ["filled", "outline", "light", "subtle"];
    const tabIconOptions: any[] = [undefined, <SaveIcon />];
    const tabColorOptions: MantineColor[] = ["blue", "green", "red", "gray"];
    const tabTextOptions: string[] = [
        "Enregistrer",
        "Ajouter cet article au panier"
    ];

    return (

        <div className="test-button">

            <h1>Test Boutons</h1>

            <List>

                {
                    tabDisabledOptions.map((disabled, a) =>
                        tabLoadingOptions.map((loading, b) =>
                            tabVariantOptions.map((variant, c) =>
                                tabIconOptions.map((icon, d) =>
                                    tabColorOptions.map((color, e) =>
                                        tabTextOptions.map((text, f) =>
                                            <Button
                                                disabled={disabled}
                                                loading={loading}
                                                variant={variant}
                                                icon={icon}
                                                color={color}
                                                text={text}
                                                onClick={callback}
                                                key={`disabled${a}-loading${b}-variant${c}-icon${d}-color${e}-text${f}`}
                                            />
                                        )
                                    )
                                )
                            )
                        )
                    )
                }


            </List>

        </div>
    )

}

export default TestButton;