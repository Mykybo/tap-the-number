/* @flow */
/**
 * A super-simple MobX routing solution.
 */
import { observable } from 'mobx';

export type Screen = 'HOME' | 'PLAYGROUND' | 'ENDGAME' | 'LOGIN' | 'MENU';

export default class RouterStore {
  @observable currentScreen: Screen = 'HOME';

  navigateToHome = () => {
    this.currentScreen = 'HOME';
  };
  navigateToMenu = () => {
    this.currentScreen = 'MENU';
  };

  navigateToPlayground = () => {
    this.currentScreen = 'PLAYGROUND';
  };

  navigateToEndgame = () => {
    this.currentScreen = 'ENDGAME';
  };
}
