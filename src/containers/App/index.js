/* @flow */
/**
 * Main application component, handles the routing.  
 */
import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Image, View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import backgroundImg from '../../images/bg.jpg';
import Playground from '../../containers/Playground';
import Home from '../../containers/Home';
import Endgame from '../../containers/Endgame';
import Menu from '../../containers/Menu';
import Login from '../../containers/Login';
import styles from './index.style';

type Props = {
  currentScreen: string,
};

@inject(allStores => ({
  currentScreen: allStores.router.currentScreen,
}))
@observer
export default class App extends Component<Props, Props, void> {
  static defaultProps = {
    currentScreen: 'LOGIN',
  };

  render() {
    let content;
    switch (this.props.currentScreen) {
      case 'LOGIN':
        content = <Login />;
        break;
      case 'HOME':
        content = <Home />;
        break;
      case 'PLAYGROUND':
        content = <Playground />;
        break;
      case 'ENDGAME':
        content = <Endgame />;
        break;
      case 'MENU':
        content = <Menu />;
        break;
      default:
        content = <View><Text>View Not Found</Text></View>;
        break;
    }
    return (
      <Image source={backgroundImg} style={styles.container}>
        <StatusBar hidden={true} />
        {content}
      </Image>
    );
  }
}
