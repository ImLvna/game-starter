import React from "react";
import * as PIXI from "pixi.js";
import { InteractionEvent } from "@pixi/interaction";
import { Stage, Container, Sprite } from "@pixi/react";
import BaseScreen from "./screen";

let index = 1;

interface DraggableBoxProps {
  tint: number;
  x?: number;
  y?: number;
}
const DraggableBox = ({ tint, x, y, ...props }: DraggableBoxProps) => {
  const isDragging = React.useRef(false);
  const offset = React.useRef({ x: 0, y: 0 });
  const [position, setPosition] = React.useState({ x: x || 0, y: y || 0 })
  const [alpha, setAlpha] = React.useState(1);
  const [zIndex, setZIndex] = React.useState(index);
  
  function onStart(e: InteractionEvent) {
    isDragging.current = true;    
    offset.current = {
      x: e.data.global.x - position.x,
      y: e.data.global.y - position.y
    };
    
    setAlpha(0.5);
    setZIndex(index++);
  }

  function onEnd() {
    isDragging.current = false;
    setAlpha(1);
  }

  function onMove(e: InteractionEvent) {
    if (isDragging.current) {
      setPosition({
        x: e.data.global.x - offset.current.x,
        y: e.data.global.y - offset.current.y,
      })
    }
  }

  return (
    <Sprite
      {...props}
      alpha={alpha}
      position={position}
      texture={PIXI.Texture.WHITE}
      width={100}
      height={100}
      zIndex={zIndex}
      tint={tint}
      interactive={true}
      pointerdown={onStart}
      pointerup={onEnd}
      pointerupoutside={onEnd}
      pointermove={onMove}
    />
  );
};

export default class Game extends BaseScreen {
    render() {
        return (
          <div>
            <p onClick={ this.setScreen('start') }>
              Back to start
            </p>
            <Stage>
              <Container sortableChildren={true}>
                <DraggableBox tint={0xff00ff} x={0} />
                <DraggableBox tint={0x00ffff} x={100} />
                <DraggableBox tint={0x00ff00} x={200} />
              </Container>
            </Stage>
          </div>
        );
    }
}