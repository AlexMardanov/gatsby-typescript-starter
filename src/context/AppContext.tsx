import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

const defaultValues = {
  isDarkTheme: false,
  toggleDarkTheme: () => {},
};

export const AppContext = React.createContext(defaultValues);

export const AppProvider = (props: IProps) => {
  const { children } = props;
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const toggleDarkTheme = () => setDarkTheme(!isDarkTheme);

  return (
    <AppContext.Provider
      value={{ ...defaultValues, isDarkTheme, toggleDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
