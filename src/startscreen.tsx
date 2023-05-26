import BaseScreen from './screen';

export default class StartScreen extends BaseScreen {
    render() {
        return (
            <div>
                <h1>Start Screen</h1>
                <h1 onClick={ this.setScreen('game') }>Start Game</h1>
            </div>
        );
    }
}