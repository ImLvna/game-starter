import { createRoot } from "react-dom/client";
import React from "react";

import { Ticker } from "pixi.js";

import './index.css'

// Import all screens
import Overlay from "./overlay";
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

  Ticker.shared.maxFPS = 30; // Limit the fps to 30
  return (
    <div>
      <Overlay />
      <div id="screen">
        {screens[screen]}
      </div>
    </div>
  )
}

const container = createRoot(document.getElementById("root")!);
container.render(<App />);