import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import React, { ReactNode } from "react";
import '@mantine/core/styles.css';
import "./global.css";
import Header from '@appComponents/FloatingMenu/Header';

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
          <Header />
          <div className="body">
            {props.children}
          </div>
          <div className="footer">

          </div>
        </MantineProvider>
      </body>
    </html>
  )
}
