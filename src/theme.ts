import { MantineTheme } from "@mantine/core";

export const customColors = {
    primary: Array(10).fill('#fedc34'),
    success: Array(10).fill('#4CAF50'),
    error: Array(10).fill('#F44336'),
  } as const;

  export type CustomColor = keyof typeof customColors;
  

const theme: Partial<MantineTheme> = {

    colors: customColors,
    primaryColor: "primary"

}

export default theme;