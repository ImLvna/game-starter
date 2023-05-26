import * as React from 'react';

export default class BaseScreen extends React.Component<{setScreen: React.Dispatch<React.SetStateAction<string>>}, {}> {
    /**
     * Shim to allow the onClick event to set the screen
     * @param screenName The name of the screen to set
     * @returns A function to be called by the onClick event
     */
    setScreen = (screenName: string) => {
        return () => {
            this.props.setScreen(screenName);
        }
    }
}