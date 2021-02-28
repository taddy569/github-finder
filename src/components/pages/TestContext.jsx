import React, { createContext, useContext } from "react";

const defaultTheme = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
  read: {
    foreground: "#f0f",
    background: "#eee",
  },
};

const MyContext = createContext(defaultTheme);

export const TestContext = () => {
  return (
    <MyContext.Provider value={defaultTheme}>
      <div>This Component for Testing React Context</div>
      <FirstChild />
    </MyContext.Provider>
  );
};

const FirstChild = () => {
  const { dark: myTheme } = useContext(MyContext);

  return (
    <>
      <div
        style={{
          backgroundColor: myTheme.background,
          color: myTheme.foreground,
        }}
      >
        First_Child
      </div>
      <SecondChild />
    </>
  );
};

const SecondChild = () => {
  const { read: myTheme } = useContext(MyContext);

  return (
    <>
      <div
        style={{
          backgroundColor: myTheme.background,
          color: myTheme.foreground,
        }}
      >
        SecondChild
      </div>
    </>
  );
};

export default TestContext;
