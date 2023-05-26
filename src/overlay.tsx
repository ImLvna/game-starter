import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Stage, Text } from '@pixi/react';

export default function Overlay() {
    // Show fps
    const [fps, setFps] = React.useState('0');
    useEffect(() => {
        const ticker = PIXI.Ticker.shared;
        ticker.add(() => {
            setFps(ticker.FPS.toFixed(0));
        });
    })
    return (
        <Stage width={800} height={600} options={{ backgroundAlpha: 0 }}>
            <Text text={`Fps: ${fps}`} />
        </Stage>
    );

}