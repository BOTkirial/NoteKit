import React, { ReactNode } from "react";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import "./global.css";
import List from "./components/List/List";
import Button from "./components/Button/Button";
import { SaveIcon } from "lucide-react";
import Test from "./components/Test/Test";

export const metadata = {
  title: 'NoteKit',
  description: 'Work in progress',
}

interface PropsLayout {
  children: ReactNode
}

export default function RootLayout(props: PropsLayout) {
  return (
    <html lang="fr" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {props.children}

          <Test />


        </MantineProvider>
      </body>
    </html>
  )
}
