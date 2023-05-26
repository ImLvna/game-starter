import { createRoot } from "react-dom/client";
import React from "react";

// Import all screens
import StartScreen from "./startscreen";
import Game from "./game";

let screens: { [key: string]: JSX.Element } = {}

function addScreen(name: string, screen: JSX.Element) {
  screens[name] = screen
}

const App = () => {
  const [screen, _setScreen] = React.useState('start')
  addScreen('start', <StartScreen setScreen={_setScreen} />)
  addScreen('game', <Game setScreen={_setScreen} />)
  return (
    screens[screen]
  )
}

const container = createRoot(document.getElementById("root")!);
container.render(<App />);