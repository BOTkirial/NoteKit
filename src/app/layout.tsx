import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import React, { ReactNode } from "react";
import '@mantine/core/styles.css';
import "./global.css";

export const metadata = {
  title: 'Next JS',
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
        </MantineProvider>
      </body>
    </html>
  )
}
