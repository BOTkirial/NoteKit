import React, { ReactNode } from "react";
import '@mantine/core/styles.css';
import { Button, ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import "./global.css";

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
          <Button>coucou</Button>
        </MantineProvider>
      </body>
    </html>
  )
}
