import React from  "react";
import { AppProvider } from './src/context/AppContext'

export const wrapRootElement = (props) => {
  const { element } = props;

  return (
    <AppProvider>{element}</AppProvider>
  )
}
